import { FC, memo } from 'react';

import cn from 'classnames';
import scss from './time-grid.module.scss';

interface TimeSlotProps {
  hour: number;
}

const TimeSlot: FC<TimeSlotProps> = memo(({ hour }) => {
  return (
    <>
      <li className={cn(scss['time-number'], scss['hour'])}>{hour}</li>
      <li className={cn(scss['time-number'], scss['plus-15'])}>: {15}</li>
      <li className={cn(scss['time-number'], scss['half-hour'])}>:{30}</li>
      <li className={cn(scss['time-number'], scss['plus-15'])}>: {45}</li>
    </>
  );
});

export { TimeSlot };
