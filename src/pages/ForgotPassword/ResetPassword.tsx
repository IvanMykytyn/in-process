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
import { validateConfirmPassword, validatePassword } from 'utils';
import { FormLayout } from 'pages/FormLayout/FormLayout';

// icons
import { keyIcon, arrowLeft } from 'assets/images/icons';
import { Link } from 'react-router-dom';

const ResetPasswordValidation = Joi.object({
  password: validatePassword,
  confirmPassword: validateConfirmPassword,
});

const ResetPassword: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    resolver: joiResolver(ResetPasswordValidation),
    mode: 'onSubmit',
  });

  // TODO create service and thunk
  const SubmitResetPasswordForm = async (value: object) => {
    try {
      await console.log(value);

      // reset()
    } catch (e) {}
  };

  return (
    <FormLayout
      header={'Set new password'}
      description={'Your new password must be different to previously used password'}
      icon={keyIcon}
    >
      <form
        className={css['forgot-password__form']}
        onSubmit={handleSubmit(SubmitResetPasswordForm)}
      >
        {/* TODO move error message to Input Component */}
        <Input
          className={css['forgot-password__form-input']}
          type={'password'}
          label={'password'}
          {...register('password')}
          inputRef={register('password').ref}
          error={!!errors.password}
          errorText={errors.password?.message}
        />

        <Input
          className={css['forgot-password__form-input']}
          type={'password'}
          label={'confirmPassword'}
          {...register('confirmPassword')}
          inputRef={register('confirmPassword').ref}
          error={!!errors.confirmPassword}
          errorText={errors.confirmPassword?.message}
        />

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

export { ResetPassword };
