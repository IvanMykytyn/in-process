import React, { FC } from 'react';

import cn from 'classnames';
import scss from './time-grid.module.scss';

interface TimeSlotProps {
  number: number;
}
const TimeSlot: FC<TimeSlotProps> = ({ number }) => {
  return (
    <>
      <li className={cn(scss['time-number'], scss['hour'])}>{number}</li>
      <li className={cn(scss['time-number'], scss['plus-15'])}>: {15}</li>
      <li className={cn(scss['time-number'], scss['half-hour'])}>:{30}</li>
      <li className={cn(scss['time-number'], scss['plus-15'])}>: {45}</li>
    </>
  );
};

export { TimeSlot };
