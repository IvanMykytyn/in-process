import { FC } from 'react';

import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';

import { SectionLayout } from './SectionLayout';
import { SectionInput } from './SectionInput';
import { SectionButtons } from './SectionButtons';

import { changePassword, selectUser } from 'store';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import { validatePassword, validateConfirmPassword } from 'utils';
import { changePasswordProps } from 'models';

const initialValues: changePasswordProps = {
  newPassword: '',
  confirmPassword: '',
};

const changePasswordValidator = Joi.object({
  newPassword: validatePassword,
  confirmPassword: validateConfirmPassword,
});

const ChangePasswordSection: FC = () => {
  const { isLoading } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm({
    defaultValues: initialValues,
    resolver: joiResolver(changePasswordValidator),
    mode: 'onSubmit',
  });

  const submit = async ({ newPassword }: changePasswordProps) => {
    try {
      await dispatch(changePassword({ newPassword }));
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = () => {
    clearErrors();
  };

  return (
    <SectionLayout headerText={'Password Change'} onSubmit={handleSubmit(submit)}>
      <SectionInput
        type={'password'}
        text={'New Password'}
        {...register('newPassword')}
        error={!!errors.newPassword}
        errorText={errors.newPassword?.message}
      />

      <SectionInput
        type={'password'}
        text={'Confirm Password'}
        {...register('confirmPassword')}
        error={!!errors.confirmPassword}
        errorText={errors.confirmPassword?.message}
      />
      <SectionButtons handleCancel={handleCancel} />
    </SectionLayout>
  );
};

export { ChangePasswordSection };
