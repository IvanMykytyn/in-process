import React, {FC, useState} from 'react';

interface Props {
    children: React.ReactNode
}

const ButtonLoading: React.FC<Props> = ({children, ...arg})=> {

    const [isLoading, setIsLoading] = useState(false)
    return (
        <>
            <button {...arg}
                    className={'button'}
                    type={'button'}
                    onClick={()=>setIsLoading(true)}
            >
                {children}
                <i className={isLoading? "fa-solid fa-spinner fa-spin-pulse" : ''}></i>
            </button>
        </>
    );
}
export {ButtonLoading};