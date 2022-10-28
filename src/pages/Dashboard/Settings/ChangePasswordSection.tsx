import { FC } from 'react';

import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';

import { SectionLayout } from './SectionLayout';
import { SectionInput } from './SectionInput';
import { SectionButtons } from './SectionButtons';

import { selectUser, useAppDispatch, useAppSelector } from 'store';
import { validatePassword, validateConfirmPassword } from 'utils';
import { changePasswordProps } from 'models';

const initialValues: changePasswordProps = {
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
};

const changePasswordValidator = Joi.object({
  oldPassword: validatePassword,
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
    clearErrors
  } = useForm({
    defaultValues: initialValues,
    resolver: joiResolver(changePasswordValidator),
    mode: 'onSubmit',
  });

  const submit = async ({ oldPassword, newPassword }: changePasswordProps) => {
    try {
      //   await dispatch();
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = () => {
    clearErrors()
  }

  return (
    <SectionLayout headerText={'Password Change'} onSubmit={handleSubmit(submit)}>
      <SectionInput
        type={'password'}
        text={'Old Password'}
        {...register('oldPassword')}
        error={!!errors.oldPassword}
        errorText={errors.oldPassword?.message}
      />
      <SectionInput
        type={'password'}
        text={'New Password'}
        {...register('newPassword')}
        error={!!errors.newPassword}
        errorText={errors.newPassword?.message}
      />

      <SectionInput
        type={'password'}
        text={'Repeat Password'}
        {...register('confirmPassword')}
        error={!!errors.confirmPassword}
        errorText={errors.confirmPassword?.message}
      />
      <SectionButtons isLoading={isLoading} handleCancel={handleCancel}/>
    </SectionLayout>
  );
};

export { ChangePasswordSection };
