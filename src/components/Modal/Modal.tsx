import React, {FC, useState} from 'react';

import './modal.styles.scss';

import {Button} from '../index'

interface ModalProps {
    children?: any;
    checked?: boolean;
    fullWidth?: boolean;
    label: string
}

const Modal: FC<ModalProps> = ({children, checked,fullWidth,label}) => {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <button className={'button'}
                    style={fullWidth ? {width: '100%'} : {width: 'auto'}}
                    onClick={() => setOpen(true)}>
                {label}
            </button>
            <div className={`modal animated  ${open || checked ? 'show' : ''}`}>
                <div className={'modal__content'}>
                    <div className={'children_content'}>
                        {children}
                    </div>
                    <button className={'button'}
                            onClick={() => setOpen(false)}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export {Modal};