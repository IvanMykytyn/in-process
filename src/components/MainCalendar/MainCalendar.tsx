import {FC, useState} from "react";

import {Calendar} from 'react-calendar';

import css from './MainCalendar.module.scss';

interface Props {
    range?: boolean
}

const MainCalendar:FC<Props> = ({range}) => {
    const [value, onChange] = useState(new Date());
    console.log(value);

    return (
        <div className={css.calendar}>
            <Calendar locale={"uk-UK"} onChange={onChange} value={value} selectRange={range} defaultActiveStartDate={value}/>
        </div>
    );
};

export {MainCalendar};