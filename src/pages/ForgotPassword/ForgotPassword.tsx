import { FC } from 'react';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import { useForm } from 'react-hook-form';

// styles
import cn from 'classnames';
import css from './forgot-password.module.scss';

// components
import { Button, Input } from 'components';

// utils
import { validateEmail } from '../../utils';
import { FormLayout } from 'pages/FormLayout/FormLayout';
import { arrowLeft, keyIcon } from 'assets/images/icons';
import { Link } from 'react-router-dom';

const ForgotPasswordValidation = Joi.object({
  email: validateEmail,
});

const ForgotPassword: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: '',
    },
    resolver: joiResolver(ForgotPasswordValidation),
    mode: 'onSubmit',
  });

  // TODO create service and thunk
  const SubmitForgotPasswordForm = async (value: object) => {
    try {
      await console.log(value);
      reset();
    } catch (e) {
      alert('error :(');
    }
  };

  return (
    <FormLayout
      header={'Forgot Password'}
      description={' Send a link to your mail to reset your password'}
      icon={keyIcon}
    >
      <form
        className={css['forgot-password__form']}
        onSubmit={handleSubmit(SubmitForgotPasswordForm)}
      >
        <div>
          <Input
            className={css['forgot-password__form-input']}
            type={'email'}
            label={'email'}
            {...register('email')}
            inputRef={register('email').ref}
            error={errors.email ? true : false}
            errorText={errors.email?.message}
          />
        </div>

        <Button type={'submit'} fullWidth>
          Reset Password
        </Button>
      </form>

      <div className={css['forgot-password__go-back']}>
        <Link to={'/login'} className={css['forgot-password__go-back-link']}>
          <img src={arrowLeft} alt={'arrowLeft'} />
          <p>Back to Login</p>
        </Link>
      </div>
    </FormLayout>
  );
};

export { ForgotPassword };
