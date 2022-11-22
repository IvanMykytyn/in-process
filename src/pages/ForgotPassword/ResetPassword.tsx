import { FC } from 'react';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import { useForm } from 'react-hook-form';

// styles
import css from './forgot-password.module.scss';

// components
import { Button, Input } from 'components';

// utils
import { getUrlId, validateConfirmPassword, validatePassword } from 'utils';
import { FormLayout } from 'pages/FormLayout/FormLayout';

// icons
import { keyIcon, arrowLeft } from 'assets/images/icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { resetPassword } from 'store';
import { useAppDispatch } from '../../hooks';
import { ResetPasswordProps } from 'models';

const ResetPasswordValidation = Joi.object({
  newPassword: validatePassword,
  confirmPassword: validateConfirmPassword,
});

const ResetPassword: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
    resolver: joiResolver(ResetPasswordValidation),
    mode: 'onSubmit',
  });

  const SubmitResetPasswordForm = async ({
    newPassword,
  }: Omit<ResetPasswordProps, 'id'>) => {
    try {
      const userId = getUrlId(location.pathname, '/resetPassword/');
      await dispatch(resetPassword({ id: userId, newPassword }));
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FormLayout
      header={'Set new password'}
      description={'Your new password must be different to previously used password'}
      icon={keyIcon}
      dataTestid={'reset-password-page'}
    >
      <form
        className={css['forgot-password__form']}
        onSubmit={handleSubmit(SubmitResetPasswordForm)}
      >
        <Input
          className={css['forgot-password__form-input']}
          type={'password'}
          label={'password'}
          {...register('newPassword')}
          inputRef={register('newPassword').ref}
          error={!!errors.newPassword}
          errorText={errors.newPassword?.message}
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
