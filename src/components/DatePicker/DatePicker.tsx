import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Input } from 'components/Input/Input';
import moment, { Moment } from 'moment';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { FC, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { MainCalendar } from 'components/MainCalendar/MainCalendar';
import { calendar } from 'assets/images/icons';

import css from './date-picker.module.scss';

type DatePickerProps = {
  date: Moment | null;
  handleChange: (newValue: Moment | null) => void;
  disabled?: boolean;
  error: boolean;
  errorText?: string;
};

const DatePicker: FC<DatePickerProps> = ({
  date = moment(),
  handleChange,
  disabled,
  error,
  errorText,
  ...rest
}) => {
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
          renderInput={(params) => (
            <Input {...params} fullWidth error={error} errorText={errorText} />
          )}
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
            handleChange={(value) => handleChange(moment(value))}
            handleClickAway={handleClickAway}
          />
        </div>
      )}
    </>
  );
};

export { DatePicker };
