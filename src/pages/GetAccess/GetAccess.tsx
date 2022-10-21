import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { joiResolver } from '@hookform/resolvers/joi';

// styles
import cn from 'classnames';
import css from '../Login/login.module.scss';

import registration from 'assets/images/icons/registration.png';

import { Input, Button } from 'components/index';
import { getAccessValidator } from './get-access.validators';
import { FormLayout } from '../';

const GetAccess: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: '',
    },
    resolver: joiResolver(getAccessValidator),
    mode: 'onSubmit',
  });

  let submit = async (value: object) => {
    try {
      await console.log(value);
    } catch (e) {}
  };

  return (
    <FormLayout header={'Get Access to In-Process'} icon={registration}>
      <form className={css['form-wrapper']} onSubmit={handleSubmit(submit)}>
        <Input
          type={'email'}
          label={'email'}
          {...register('email')}
          inputRef={register('email').ref}
          error={!!errors.email}
          errorText={errors.email?.message}
        />

        <Button type={'submit'} fullWidth>
          Send Email
        </Button>

        <div className={css['navigate-form-wrapper']}>
          Already have an account?
          <Link to={'/login'}>Login</Link>
        </div>
      </form>
    </FormLayout>
  );
};

export { GetAccess };
