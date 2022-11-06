import React, {FC, useState} from 'react';

import cn from 'classnames';
import css from './Dropdown.module.scss';

import {IFilters} from "../../pages"

interface FilterProps{
    selected: string,
    setSelected: any,
    arr: IFilters[],
    value: string
}

const Dropdown: FC<FilterProps> = ({selected, setSelected,arr, value}) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={cn(css.dropdown)}>
            <div className={cn(css.dropdown__btn)} onClick={(e) => setIsActive(!isActive)}>
                {value}
            </div>
            {isActive && (
                <ul className={cn(css.dropdown__content)}>
                    {arr.map((value)=>(
                        <li className={cn(css.dropdown__item)}
                            onClick={(e)=>{
                        setSelected(value)
                        setIsActive(false)
                    }}>
                            {value.name}
                         </li>
                        ))}
                 </ul>
            )}
        </div>
    );
}

export {Dropdown};