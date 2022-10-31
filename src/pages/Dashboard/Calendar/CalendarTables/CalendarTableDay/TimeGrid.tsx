import React, { FC } from 'react';

import cn from 'classnames';
import scss from './time-grid.module.scss';
import { rooms } from 'pages/Dashboard/Rooms/Rooms';

enum Times {
  Hour = 'hour',
  min15 = 'min15',
  min30 = 'min30',
  min45 = 'min15',
}

// TODO change id
const cells = Array.from({ length: 24 * 4 }, (_, i) => i + 'shjeg');

const TimeGrid = () => {
  return (
    <>
      {cells.map((cell, index) => (
        <TimeCell key={cell} time={getTimeStyle(index)} />
      ))}
    </>
  );
};

const TimeCell: FC<{ time: Times }> = ({ time }) => {
  return <div className={scss['time-cell-row']} data-time={time} />;
};

export { TimeGrid };

const getTimeStyle = (index: number): Times => {
  switch (index % 4) {
    case 0:
      return Times.Hour;
    case 1:
      return Times.min15;
    case 2:
      return Times.min30;
    case 3:
      return Times.min45;
    default:
      return Times.min15;
  }
};
