import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Input } from 'components/Input/Input';
import { Moment } from 'moment';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { FC, useRef, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { SetStateType } from 'models';
import { MainCalendar } from 'components/MainCalendar/MainCalendar';
import { calendar } from 'assets/images/icons';

import css from './date-picker.module.scss';
import cn from 'classnames';
import TouchRipple from '@mui/material/ButtonBase/TouchRipple';
import { ButtonBase } from '@mui/material';

type DatePickerProps = {
  date: Moment | null;
  setDate: SetStateType<Moment | null>;
  disabled?: boolean;
};

const DatePicker: FC<DatePickerProps> = ({ date, setDate, disabled }) => {
  const handleChange = (newValue: Moment | null) => {
    setDate(newValue);
  };

  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const handleClickAway = () => {
    setIsCalendarOpen(false);
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DesktopDatePicker
          disablePast
          disableOpenPicker
          value={date}
          disabled={disabled}
          onChange={handleChange}
          renderInput={(params) => <Input {...params} fullWidth />}
        />
      </LocalizationProvider>
      <img
        src={calendar}
        alt="calendar-icon"
        className={css['calendar-icon']}
        onClick={() => setIsCalendarOpen(true)}
      />
      {isCalendarOpen && (
        <div className={css['form-calendar']}>
          <MainCalendar
            date={date}
            setDate={setDate}
            handleClickAway={handleClickAway}
          />
        </div>
      )}
    </>
  );
};

export { DatePicker };
