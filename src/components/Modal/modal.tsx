import React, {FC, useState} from 'react';

import './modal.styles.scss';

interface ModalProps{
    active?: boolean
    setActive?: any
    children?: any
}
const Modal: FC<ModalProps> = ({active,setActive, children})=> {

    return (
        <div>
        <div className={ active? "modal active" : "modal"}
             onClick={()=> setActive(false)}
        >
            <div className={active? "modal__content active" : "modal"}
                 onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
        </div>
    );
}
export {Modal};