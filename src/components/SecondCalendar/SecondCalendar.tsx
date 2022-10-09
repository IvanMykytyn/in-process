import {useState} from "react";

import {Calendar} from 'react-calendar';

import css from './SecondCalendar.module.scss';


const SecondCalendar = () => {
    const [value, onChange] = useState(new Date());

    console.log(value)

    return (
        <div className={css.calendar}>
            <Calendar onChange={onChange} value={value}/>
        </div>
    );

};

export {SecondCalendar};