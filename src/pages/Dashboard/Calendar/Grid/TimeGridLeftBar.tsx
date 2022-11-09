import { FC } from 'react';
import scss from './time-grid.module.scss';

import { TimeSlot } from './TimeSlot';
import { clockHours } from '../constants';

const TimeGridLeftBar: FC = () => {
  return (
    <div className={scss['left-bar__container']}>
      <ul className={scss['left-bar']}>
        {clockHours.map((hour) => {
          return <TimeSlot key={hour} hour={hour} />;
        })}
      </ul>
    </div>
  );
};

export { TimeGridLeftBar };
