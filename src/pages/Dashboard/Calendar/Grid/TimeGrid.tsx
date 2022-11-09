import { FC } from 'react';

import scss from './time-grid.module.scss';
import { totalCells } from '../constants';
import { getTimeSegments } from '../utils';

const TimeGrid: FC = () => {
  return (
    <>
      {totalCells.map((cell, index) => {
        const timeSegment = getTimeSegments(index);

        return (
          <div
            key={cell}
            className={scss['time-cell-row']}
            data-time={timeSegment}
          />
        );
      })}
    </>
  );
};

export { TimeGrid };
