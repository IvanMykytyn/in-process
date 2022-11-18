import { FC, useState } from 'react';
import moment, { Moment } from 'moment';
import { Calendar } from 'react-calendar';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import css from './MainCalendar.module.scss';

import { SetStateType } from 'models';

interface Props {
  range?: boolean;
  handleClickAway: () => void;
  setDate: SetStateType<Moment | null>;
  date: Moment | null;
}

const MainCalendar: FC<Props> = ({ range, handleClickAway, setDate, date }) => {
  const onChange = (selectedDate: Date) => {
    setDate(moment(selectedDate));
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={css.calendar}>
        <Calendar
          locale={'en-gb'}
          onChange={onChange}
          selectRange={range}
          defaultActiveStartDate={date?.toDate()}
          onClickDay={(value) => {
            setDate(moment(value));
            handleClickAway();
          }}
        />
      </div>
    </ClickAwayListener>
  );
};

export { MainCalendar };
