import React from 'react';
import cn from 'classnames';

import './Button.style.scss'

interface Props {
    children: React.ReactNode
}

const Button: React.FC<Props> = ({children, ...arg}) => {
    return (
        <>
            <button type={'button'}
                    className={"button"}
                    {...arg}
            >
                {children}
            </button>
        </>
    );
}
export {Button};