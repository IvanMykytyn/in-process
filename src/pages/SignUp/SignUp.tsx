import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { Link, useNavigate, useParams } from 'react-router-dom';

// styles
import cn from 'classnames';
import css from '../Login/login.module.scss';

import registration from 'assets/images/icons/registration.png';

import { useAppDispatch, useAppSelector } from 'store';
import { selectUser } from 'store';
import { signUpUser } from 'store/thunk';
import { Input, Button } from 'components/index';
import { signUpValidator } from './sign-up.validators';
import { FormLayout } from '../';
import { UserSignUpProps } from 'models';
import { isLoggedIn, NotifyService } from 'services';

const initialValues = {
  firstName: '',
  lastName: '',
  password: '',
};

const SignUp: FC = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, isLoading } = useAppSelector(selectUser);

  useEffect(() => {
    if (isLoggedIn()) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
    resolver: joiResolver(signUpValidator),
    mode: 'onSubmit',
  });

  let submit = async (values: Omit<UserSignUpProps, 'id'>) => {
    try {
      const userId = params.userId;
      if (userId) {
        await dispatch(signUpUser({ ...values, id: userId }));
      } else {
        NotifyService.error('Invalid Link');
        navigate('/login');
      }
    } catch (err) {
      console.log(err);
    }
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

        <Button type={'submit'} fullWidth disabled={isLoading} loading={isLoading}>
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
