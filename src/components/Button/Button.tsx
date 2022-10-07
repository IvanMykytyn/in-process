import React from 'react';
import cn from 'classnames';

import './Button.style.scss'

const Button = ({children, ...arg}: any) => {

    return (
        <>
            <button className={'button'} {...arg}>
                {children}
            </button>
        </>
    );
}

export {Button};