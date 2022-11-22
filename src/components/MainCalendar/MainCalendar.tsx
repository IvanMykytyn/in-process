import { FC, useState } from 'react';
import moment, { Moment } from 'moment';
import { Calendar } from 'react-calendar';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import css from './MainCalendar.module.scss';

import { SetStateType } from 'models';

interface Props {
  range?: boolean;
  handleClickAway: () => void;
  handleChange: (selectedDate: Date) => void;
  date: Moment | null;
}

const MainCalendar: FC<Props> = ({ range, handleClickAway, handleChange, date }) => {

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={css.calendar}>
        <Calendar
          locale={'en-gb'}
          onChange={handleChange}
          selectRange={range}
          value={date?.toDate()}
          defaultActiveStartDate={date?.toDate()}
          onClickDay={(value) => {
            handleChange(value);
            handleClickAway();
          }}
        />
      </div>
    </ClickAwayListener>
  );
};

export { MainCalendar };
