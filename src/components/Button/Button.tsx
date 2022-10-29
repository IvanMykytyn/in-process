import React from 'react';
import cn from 'classnames';

import './Button.style.scss'

interface Props {
    children?: React.ReactNode;
    isPressed?: boolean;
    loading?: boolean;
    type: "button" | "submit" | "reset" | undefined;
    onClick?: React.MouseEventHandler;
    fullWidth?: boolean;
    disabled?: boolean;
    variant?: string;
}

const Button: React.FC<Props> = ({children, type, disabled, variant, isPressed, loading, onClick, fullWidth, ...arg}) => {

    return (
        <button type={type || 'button'}
                className={cn(isPressed ? 'active' : 'button', {[`${variant}-styles`]: !!variant})}
                style={fullWidth ? {width: '100%'} : {width: 'auto'}}
                disabled={disabled || loading}
                onClick={onClick}
                {...arg}
        >
            <span style={loading ? {opacity: '0'} : {opacity: '1'}}>
                {children}
            </span>
            <i className={loading ? "loading" : ''}></i>
        </button>
    );
};


export {Button};