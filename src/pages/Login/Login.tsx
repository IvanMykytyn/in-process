import {FC, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import {joiResolver} from '@hookform/resolvers/joi';

// styles
import cn from 'classnames';
import css from './login.module.scss';

import logo from '../../assets/images/logo/incora_logo.png';

import {Input, Button} from '../../components/index';
import {loginValodator} from './login.validators';

const Login: FC = () => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: joiResolver(loginValodator),
        mode: "onSubmit"
    });

    let submit = async (value: object) => {
        try {
            await console.log(value)
            // You can set info to server on this function
            // If you want to clean your form use reset()
        } catch (e) {

        }
    }

    return (
        <div className={css.container}>
            <div className={css.login}>
                <div className={css.login__inner}>
                    <span className={css.login__title}></span>
                    <form className={css.login__form}
                          onSubmit={handleSubmit(submit)}>
                        <Input className={css.login__input}
                               type={'email'}
                               label={'email'}
                               {...register("email")}
                               inputRef={register("email").ref}
                        />
                        {errors.email && <span>{errors.email.message}</span>}

                        <Input className={css.login__input}
                               type={'password'}
                               label={'password'}
                               {...register("password")}
                               inputRef={register("password").ref}
                        />
                        {errors.password && <span>{errors.password.message}</span>}
                        <label className={css.login__forgot}>
                            <Link className={css.login__link}
                                  to={''}>
                                Forgot password?
                            </Link>
                        </label>

                        <Button type={'submit'}>
                            SingIn
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export {Login};
