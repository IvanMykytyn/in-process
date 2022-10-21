    import {FC} from 'react';
import Joi from 'joi';
import {joiResolver} from '@hookform/resolvers/joi';
import {useForm} from 'react-hook-form';

// styles
import cn from 'classnames';
import css from './forgot-password.module.scss';

// components
import {Button, Input} from 'components';

// utils
import {validateConfirmPassword, validatePassword} from '../../utils';
import {ForgotPasswordLayout} from './ForgotPasswordLayout';


const ResetPasswordValidation = Joi.object({
    password: validatePassword,
    confirmPassword: validateConfirmPassword,
});

const ResetPassword: FC = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
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
        } catch (e) {
        }
    };

    return (
        <ForgotPasswordLayout
            header={'Set new password'}
            description={'Your new password must be different to previously used password'}
        >
            <form
                className={css['forgot-password__form']}
                onSubmit={handleSubmit(SubmitResetPasswordForm)}
            >
                {/* TODO move error message to Input Component */}
                <div>
                    <Input
                        className={css['forgot-password__form-input']}
                        type={'password'}
                        label={'password'}
                        {...register('password')}
                        inputRef={register('password').ref}
                        error={!!errors.password}
                    />
                    {errors?.password && (
                        <span className={css['forgot-password__error-message--first']}>
              {errors.password.message}
            </span>
                    )}
                </div>

                <div>
                    <Input
                        className={css['forgot-password__form-input']}
                        type={'password'}
                        label={'confirmPassword'}
                        {...register('confirmPassword')}
                        inputRef={register('confirmPassword').ref}
                        error={!!errors.confirmPassword}
                    />
                    {errors?.confirmPassword && (
                        <span className={css['forgot-password__error-message--second']}>
              {errors.confirmPassword.message}
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

export {ResetPassword};
