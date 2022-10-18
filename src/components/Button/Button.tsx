import React, {useState} from 'react';
import cn from 'classnames';

import './Button.style.scss'

interface Props {
    children?: React.ReactNode;
    variant?: boolean;
    loading?: boolean;
    type: "button" | "submit" | "reset" | undefined;
    onClick?: React.MouseEventHandler;
    fullWidth?: boolean;
}

const Button: React.FC<Props> = ({children, type, variant, loading, onClick, fullWidth, ...arg}) => {

    return (
        <>
            <button type={type || 'button'}
                    className={variant ? 'active' : `button`}
                    style={fullWidth ? {width: '100%'} : {width: 'auto'}}
                    onClick={onClick}
                    {...arg}
            >
                <span style={loading ? {opacity: '0'} : {opacity: '1'}}>
                    {children}
                </span>
                <i className={loading ? "loading" : ''}></i>
            </button>
        </>
    );
};


export {Button};