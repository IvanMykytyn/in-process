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
import { ForgotPasswordLayout } from './ForgotPasswordLayout';

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
    } catch (e) {}
  };

  return (
    <ForgotPasswordLayout
      header={'Forgot Password'}
      description={' Send a link to your mail to reset your password'}
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
            error={!!errors.email}
          />
          {errors?.email && (
            <span className={css['forgot-password__error-message']}>
              {errors.email.message}
            </span>
          )}
        </div>

        <Button type={'submit'} fullWidth>
          Reset Password
        </Button>
      </form>
    </ForgotPasswordLayout>
  );
};

export { ForgotPassword };
