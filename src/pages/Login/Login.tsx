import {FC, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {Link, useNavigate} from 'react-router-dom';
import {joiResolver} from '@hookform/resolvers/joi';

// styles
import cn from 'classnames';
import css from './login.module.scss';

import login from '../../assets/images/icons/login.png';

import {Input, Button} from '../../components/index';
import {loginValidator} from './login.validators';
import { loginUser, selectUser } from 'store/features';
import { UserLoginProps } from 'models';

import { useAppDispatch, useAppSelector } from 'store';

const initialValues = {
    email: '',
    password: ''
}

const Login: FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {user, isLoading} = useAppSelector(selectUser);

    useEffect(() => {
        if (user) { 
            navigate('/dashboard')
        }    
      }, [user, navigate])

    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: initialValues,
        resolver: joiResolver(loginValidator),
        mode: "onSubmit"
    });

    let submit = async ({email,password}: UserLoginProps) => {
        try {
            console.log({email, password})
            await dispatch(loginUser({email, password}))
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className={css.container}>
            <div className={css.login}>
                <div className={css.login__inner}>
                    <span className={css.login__wrapper}>
                        <img className={css.login__img} src={login} alt="login"/>
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
                        <Button type={'submit'} fullWidth={true} disabled={isLoading}>
                            Login
                        </Button>
                        <div className={css.login__navigate}>
                            Not yet registered?
                            <Link to={'/register'}>
                                Sign Up
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export {Login};
