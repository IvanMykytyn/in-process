import { FC } from 'react';
// styles
import scss from './calendar-day.module.scss';

import { EventRenderRange } from '@fullcalendar/react';

import { CalendarTableProps, getIsCurrentDate } from '../utils';
import { dayCalendarWidth } from '../constants';

import {
  TimeGridLeftBar,
  TimeGrid,
  GridColumns,
  CurrentTimeLine,
} from '../Grid';
import { Events } from '../Events';
import { CalendarDayHeader } from './CalendarDayHeader';


const CalendarDay: FC<CalendarTableProps & { events: EventRenderRange[] }> = ({
  events,
  currentDate,
}) => {
  const isCurrentDate = getIsCurrentDate(currentDate);

  return (
    <div className={scss['calendar-table-day']}>
      <div className={scss['calendar-container']}>
        <CalendarDayHeader />

        <div className={scss['calendar-table']} style={{ width: dayCalendarWidth }}>
          <TimeGridLeftBar />
          <div className={scss['time-grid__container']}>
            <TimeGrid />
            <GridColumns />
            <Events events={events} />

            {isCurrentDate && <CurrentTimeLine />}
          </div>
        </div>
      </div>
      <div className={scss['angle-blank']} />
    </div>
  );
};

export { CalendarDay };
