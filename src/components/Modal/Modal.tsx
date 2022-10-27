import React, {FC, useState} from 'react';

import './modal.styles.scss';

import {Button} from '../index'

interface ModalProps {
    children?: any;
    checked?: boolean
}

const Modal: FC<ModalProps> = ({children, checked}) => {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <button className={'button'}
                    onClick={() => setOpen(true)}>
                Open Modal
            </button>
            <div className={`modal animated  ${open || checked ? 'show' : ''}`}>
                <div className={'modal__content'}>
                    <div className={'children_content'}>
                        {children}
                    </div>
                    <button className={'modal__button'}
                            onClick={() => setOpen(false)}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export {Modal};