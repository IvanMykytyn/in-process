import React from 'react';

import cn from 'classnames';
import scss from './time-grid.module.scss';
import { TimeSlot } from './TimeSlot';

const timeNumbers = Array.from({ length: 24 }, (_, i) => i);

const TimeGridLeftBar = () => {
  return (
    <div className={scss['left-bar__container']}>
      <ul className={scss["left-bar"]}>
        {timeNumbers.map((number) => {
          return <TimeSlot number={number} />;
        })}
      </ul>
    </div>
  );
};

export { TimeGridLeftBar };
