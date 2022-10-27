import React, { FC } from 'react';

import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';

import { SectionLayout } from './SectionLayout';
import { SectionInput } from './SectionInput';
import { SectionButtons } from './SectionButtons';

import { selectUser, useAppDispatch, useAppSelector } from 'store';
import { User } from 'models';

// styles
import scss from './settings.module.scss';

const UsersManagementSection: FC = () => {
  const { user, isLoading } = useAppSelector(selectUser);

  const dispatch = useAppDispatch();

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: { firstName, lastName },
  //   resolver: joiResolver(PersonalInfoValidator),
  //   mode: 'onSubmit',
  // });

  const submit = async (value: any) => {
    try {
      //   await dispatch();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SectionLayout
      headerText={'Users Management'}
      // onSubmit={handleSubmit(submit)}
    >

      {/* <SectionInput
        defaultValue={firstName ?? ''}
        label={'First Name'}
        type={'text'}
        {...register('firstName')}
        error={!!errors.firstName}
        errorText={errors.firstName?.message}
      />

      <SectionInput
        defaultValue={lastName ?? ''}
        label={'Last Name'}
        type={'text'}
        {...register('lastName')}
        error={!!errors.lastName}
        errorText={errors.lastName?.message}
      /> */}

      <SectionButtons isLoading={isLoading} />
    </SectionLayout>
  );
};

export { UsersManagementSection };
