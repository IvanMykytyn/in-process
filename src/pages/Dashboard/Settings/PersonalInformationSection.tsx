import { FC } from 'react';

import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';

import { SectionLayout } from './SectionLayout';
import { SectionInput } from './SectionInput';
import { SectionButtons } from './SectionButtons';

import { selectUser, updateMe } from 'store';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { UserInterface, UserFields } from 'models';
import { getFullName, validateName } from 'utils';

// styles
import scss from './settings.module.scss';

// icons
import { user as avatar } from 'assets/images/icons';

const PersonalInfoValidator = Joi.object({
  firstName: validateName,
  lastName: validateName,
});

const PersonalInformationSection: FC = () => {
  const { user, isLoading } = useAppSelector(selectUser);
  const { firstName, lastName, email } = user || ({} as UserInterface);

  const fullName = getFullName(firstName, lastName);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { firstName, lastName },
    resolver: joiResolver(PersonalInfoValidator),
    mode: 'onSubmit',
  });

  const submit = async ({ firstName, lastName }: UserFields) => {
    try {
      await dispatch(updateMe({ firstName, lastName }));
    } catch (err) {
      // console.log(err);
    }
  };

  const handleCancel = () => {
    reset();
  };

  return (
    <SectionLayout
      headerText={'Personal Information'}
      onSubmit={handleSubmit(submit)}
    >
      <div className={scss['section-avatar']}>
        <div className={scss['section-avatar__wrapper']}>
          <img src={avatar} className={scss['section-avatar__img']} alt="avatar" />
        </div>
        <div className={scss['section__user-details']}>
          <h3>{fullName ?? ''}</h3>
          <p>{email ?? ''}</p>
        </div>
      </div>

      <SectionInput
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
      />

      <SectionButtons handleCancel={handleCancel} />
    </SectionLayout>
  );
};

export { PersonalInformationSection };
