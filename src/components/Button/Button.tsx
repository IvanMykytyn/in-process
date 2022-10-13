import React from 'react';
import cn from 'classnames';

import './Button.style.scss'

interface Props {
    children?: React.ReactNode;
    variant?: boolean;
}

const Button: React.FC<Props> = ({children, variant, ...arg}) => {
    return (
        <>
            <button type={'button'}
                    className={variant?'active' : `button`}
                    {...arg}
            >
                {children}
            </button>
        </>
    );
}
export {Button};