import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { Link } from 'react-router-dom';

// styles
import cn from 'classnames';
import css from '../Login/login.module.scss';

import registration from 'assets/images/icons/registration.png';

import { Input, Button } from 'components/index';
import { signUpValidator } from './sign-up.validators';
import { FormLayout } from '../';

const SignUp: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      password: '',
    },
    resolver: joiResolver(signUpValidator),
    mode: 'onSubmit',
  });

  let submit = async (value: object) => {
    try {
      await console.log(value);
    } catch (e) {}
  };

  return (
    // TODO change header text
    <FormLayout header={'Lorem ipsum dolor sit.'} icon={registration}>
      <form className={css['form-wrapper']} onSubmit={handleSubmit(submit)}>
        <Input
          type={'text'}
          label={'First Name'}
          {...register('firstName')}
          inputRef={register('firstName').ref}
          error={!!errors.firstName}
          errorText={errors.firstName?.message}
        />

        <Input
          type={'text'}
          label={'Last Name'}
          {...register('lastName')}
          inputRef={register('lastName').ref}
          error={!!errors.lastName}
          errorText={errors.lastName?.message}
        />

        <Input
          type={'password'}
          label={'Password'}
          {...register('password')}
          inputRef={register('password').ref}
          error={!!errors.password}
          errorText={errors.password?.message}
        />

        <Button type={'submit'} fullWidth>
          Sign Up
        </Button>

        <div className={css['navigate-form-wrapper']}>
          Already have an account?
          <Link to={'/login'}>Login</Link>
        </div>
      </form>
    </FormLayout>
  );
};

export { SignUp };
