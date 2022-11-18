import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import { Input } from 'components/Input/Input';
import { Moment } from 'moment';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import React, { FC } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';

type TimePickerProps = {
  time: Moment | null;
  handleChange: (newValue: Moment | null) => void;
};

const TimePicker: FC<TimePickerProps> = ({ time, handleChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DesktopTimePicker
        value={time}
        ampm={false}
        onChange={handleChange}
        renderInput={(params) => <Input {...params} fullWidth />}
        minutesStep={5}
      />
    </LocalizationProvider>
  );
};

export { TimePicker };
