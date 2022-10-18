import {FC, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import {joiResolver} from '@hookform/resolvers/joi';

// styles
import cn from 'classnames';
import css from '../Login/login.module.scss';

import registration from '../../assets/images/icons/registration.png';

import {Input, Button} from '../../components/index';
import {signupValidator} from './signup.validators';

const SignUp: FC = () => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: joiResolver(signupValidator),
        mode: "onSubmit"
    });

    let submit = async (value: object) => {
        try {
            await console.log(value)
        } catch (e) {
        }
    }

    return (
        <div className={css.container}>
            <div className={css.login}>
                <div className={css.login__inner}>
                    <span className={css.login__wrapper}>
                        <img className={css.login__img} src={registration} alt="registration"
                             style={{transform: 'scale(1)'}}/>
                    </span>
                    <h3 className={css.login__title}>
                        Join us! And be with us!
                    </h3>
                    <form className={css.login__form}
                          onSubmit={handleSubmit(submit)}>
                        <Input className={css.login__input}
                               type={'email'}
                               label={'email'}
                               {...register("email")}
                               inputRef={register("email").ref}
                               error={errors.email ? true : false}
                        />
                        {errors.email && <span className={css.login__errorFirst}>{errors.email.message}</span>}
                        <Button type={'submit'} fullWidth={true}>
                            Sign Up
                        </Button>
                        <div className={css.login__navigate}>
                            Already have an account?
                            <Link to={'/login'}>
                                Sing In
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export {SignUp};
