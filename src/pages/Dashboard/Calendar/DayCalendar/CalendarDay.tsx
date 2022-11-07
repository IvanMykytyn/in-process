import { FC, useEffect, useRef } from 'react';
// styles
import scss from './calendar-day.module.scss';

import { EventRenderRange } from '@fullcalendar/react';

import { CalendarTableProps, getIsCurrentDate } from '../utils';
import { dayCalendarWidth } from '../constants';

import { TimeGridLeftBar, TimeGrid, GridColumns, CurrentTimeLine } from '../Grid';
import { EventsGrid } from '../Events';
import { CalendarDayHeader } from './CalendarDayHeader';

const CalendarDay: FC<CalendarTableProps & { events: EventRenderRange[] }> = ({
  events,
  currentDate,
}) => {
  const isCurrentDate = getIsCurrentDate(currentDate);

  const calendarContainerRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    calendarContainerRef?.current?.scrollTo({ left: 0 });
  }, []);

  return (
    <div className={scss['calendar-table-day']}>
      <div ref={calendarContainerRef} className={scss['calendar-container']}>
        <CalendarDayHeader />

        <div className={scss['calendar-table']} style={{ width: dayCalendarWidth }}>
          <TimeGridLeftBar />
          <div className={scss['time-grid__container']}>
            <TimeGrid />
            <GridColumns />
            <EventsGrid events={events} />

            {isCurrentDate && <CurrentTimeLine />}
          </div>
        </div>
      </div>
      <div className={scss['angle-blank']} />
    </div>
  );
};

export { CalendarDay };
