import React, {useState} from 'react';
import cn from 'classnames';

import './Button.style.scss'

interface Props {
    children: React.ReactNode;
    variant?: boolean;
    loading?: boolean;
}

const Button: React.FC<Props> = ({children, variant, loading, ...arg}) => {

    return (
        <>
            <button type={'button'}
                    className={variant ? 'active' : `button`}
                    {...arg}
            >
                <span style={loading ? {opacity: '0'} : {opacity: '1'}}>
                    {children}
                </span>
                <i className={loading ? "loading" : ''}></i>
            </button>
        </>
    );
}


export {Button};