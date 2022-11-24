import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { joiResolver } from '@hookform/resolvers/joi';

// styles
import cn from 'classnames';
import css from './login.module.scss';

import login from 'assets/images/icons/login.png';

import { Input, Button } from 'components';
import { loginValidator } from './login.validators';
import { FormLayout } from '../FormLayout/FormLayout';
import { selectUser } from 'store';
import { loginUser } from 'store/thunk';
import { UserLoginProps } from 'models';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { userService } from 'services';

const initialValues = {
  email: '',
  password: '',
};

const Login: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, isLoading } = useAppSelector(selectUser);
  
  useEffect(() => {
    if (userService.isLoggedIn()) {
      navigate('/dashboard');
    }
  }, [navigate, user]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
    resolver: joiResolver(loginValidator),
    mode: 'onSubmit',
  });

  let submit = async ({ email, password }: UserLoginProps) => {
    try {
      await dispatch(loginUser({ email, password }));
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <FormLayout
      header={'Welcome to our team!'}
      icon={login}
      iconStyles={{ transform: 'scale(-1, -1)' }}
      dataTestid={'login-page'}
    >
      <form data-testid='login-form' className={css['form-wrapper']} onSubmit={handleSubmit(submit)}>
        <Input
          type={'email'}
          label={'email'}
          {...register('email')}
          error={!!errors.email}
          errorText={errors.email?.message}
        />
        <Input
          type={'password'}
          label={'password'}
          {...register('password')}
          error={!!errors.password}
          errorText={errors.password?.message}
        />

        <label className={css.login__forgot}>
          <Link data-testid='forgot-password-link' className={css.login__link} to={'/forgot-password'}>
            Forgot password?
          </Link>
        </label>

        <Button data-testid='submit-button' type={'submit'} fullWidth disabled={isLoading} loading={isLoading}>
          Login
        </Button>

        <div className={css['navigate-form-wrapper']}>
          Don't have access yet?
          <Link to={'/get-access'}>Get Access</Link>
        </div>
      </form>
    </FormLayout>
  );
};

export { Login };
