import { FC } from 'react';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import { useForm } from 'react-hook-form';

// styles
import css from './forgot-password.module.scss';

// components
import { Button, Input } from 'components';

// utils
import { validateEmail } from '../../utils';
import { FormLayout } from 'pages/FormLayout/FormLayout';
import { arrowLeft, keyIcon } from 'assets/images/icons';
import { Link } from 'react-router-dom';
import { forgotPassword } from 'store';
import {useAppDispatch} from '../../hooks';
import { UserEmailField } from 'models';

const ForgotPasswordValidation = Joi.object({
  email: validateEmail,
});

const ForgotPassword: FC = () => {
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
    },
    resolver: joiResolver(ForgotPasswordValidation),
    mode: 'onSubmit',
  });

  const SubmitForgotPasswordForm = async ({ email }: UserEmailField) => {
    try {
      await dispatch(forgotPassword({ email }));
      // navigate('/login');
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <FormLayout
      header={'Forgot Password'}
      description={' Send a link to your mail to reset your password'}
      icon={keyIcon}
      dataTestid={'forgot-password-page'}
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
