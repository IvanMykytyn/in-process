import React from 'react';

// styles
import cn from 'classnames';
import scss from './calendar-table-day.module.scss';

import { rooms } from 'pages/Dashboard/Rooms/Rooms';
import { TimeGrid } from './TimeGrid';
import { TimeGridLeftBar } from './TimeGridLeftBar';
import { GridEvents } from './GridEvents';

const CalendarTableDay = () => {
  return (
    <div className={scss['calendar-table-day']}>
      <div className={scss['calendar-container']}>
        <ul className={scss['calendar__header']}>
          {rooms.map((room) => {
            return <li className={scss['calendar__header-room']}>{room.name}</li>;
          })}
        </ul>
        <div
          className={scss['calendar-table']}
          style={{ width: `${rooms.length * 140 + 60}px` }}
        >
          <TimeGridLeftBar />
          <div className={scss['time-grid__container']}>
            <TimeGrid />
            <GridEvents />
          </div>
        </div>
      </div>
    </div>
  );
};

export { CalendarTableDay };
