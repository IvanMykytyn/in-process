import { FC, useState } from 'react';

import { Calendar } from 'react-calendar';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import css from './MainCalendar.module.scss';
import { SetStateType } from 'models';
import moment, { Moment } from 'moment';

interface Props {
  range?: boolean;
  handleClickAway: (e: MouseEvent | TouchEvent) => void;
  setDate: SetStateType<Moment>;
  date: Moment;
}

const MainCalendar: FC<Props> = ({ range, handleClickAway, setDate, date }) => {
  const onChange = (selectedDate: Date) => {
    setDate(moment(selectedDate));
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={css.calendar}>
        <Calendar
          locale={'uk-UK'}
          onChange={onChange}
        //   value={date.toDate()}
          selectRange={range}
          defaultActiveStartDate={date.toDate()}
        />
      </div>
    </ClickAwayListener>
  );
};

export { MainCalendar };
