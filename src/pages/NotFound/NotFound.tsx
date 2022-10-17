import React, {FC} from 'react'
import {Link, useNavigate} from 'react-router-dom';

// styles
import css from './NotFound.module.scss'

import {Button} from "./../../components/index";


const NotFound: FC = () => {
    const navigate = useNavigate();

    const getNavigate = () => {
        navigate(-1);
    };


    return (
        <div className={css.error}>
            <div className={css.error__wrapper}>
                <h3 className={css.error__title}>
                    404
                    <span className={css.error__description}>
                        Page Not Found :(
                    </span>
                </h3>
                <Button type={'button'} onClick={getNavigate}>click</Button>
            </div>
        </div>
    )
}

export {NotFound}
