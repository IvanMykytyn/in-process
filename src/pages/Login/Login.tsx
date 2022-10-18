import {FC, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import {joiResolver} from '@hookform/resolvers/joi';

// styles
import cn from 'classnames';
import css from './login.module.scss';

import logo from '../../assets/images/logo/logo.png';

import {Input, Button} from '../../components/index';
import {loginValidator} from './login.validators';

const Login: FC = () => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: joiResolver(loginValidator),
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
                        <img className={css.login__logo} src={logo} alt="logo"/>
                    </span>
                    <h3 className={css.login__title}>Welcome to our team!</h3>
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

                        <Input className={css.login__input}
                               type={'password'}
                               label={'password'}
                               {...register("password")}
                               inputRef={register("password").ref}
                               error={errors.password ? true : false}
                        />
                        {errors.password && <span className={css.login__errorSecond}>{errors.password.message}</span>}
                        <label className={css.login__forgot}>
                            <Link className={css.login__link}
                                  to={'/forgot-password'}>
                                Forgot password?
                            </Link>
                        </label>
                        <Button type={'submit'} fullWidth={true}>
                            Login
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export {Login};
