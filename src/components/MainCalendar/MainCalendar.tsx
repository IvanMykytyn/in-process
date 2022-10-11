import {useState} from "react";

import {Calendar} from 'react-calendar';

import css from './MainCalendar.module.scss';


const MainCalendar = () => {
    const [value, onChange] = useState(new Date());

    console.log(value)

    return (
        <div className={css.calendar}>
            <Calendar onChange={onChange} value={value}/>
        </div>
    );

};

export {MainCalendar};