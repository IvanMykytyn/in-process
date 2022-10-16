import React, {FC} from 'react'
import {NavLink, useNavigate} from 'react-router-dom';

// styles
import css from './NotFound.module.scss'

import {Button} from "./../../components/index";

const NotFound: FC = () => {
    const navigate = useNavigate();

    return (
        <div className={css.error}>
            <div className={css.error__wrapper}>
                <h3 className={css.error__title}>
                    404
                    <span className={css.error__description}>
                        Page Not Found :(
                    </span>
                </h3>
                <NavLink to={`${navigate(-1)}`}>
                    <Button>Go Back</Button>
                </NavLink>
            </div>
        </div>
    )
}

export {NotFound}
