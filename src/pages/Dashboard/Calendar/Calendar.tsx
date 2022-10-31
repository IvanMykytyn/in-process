import { FC, useState } from 'react';

// styles
import cn from 'classnames';
import scss from './calendar.module.scss';

import { MainCalendar } from 'components';

import { CalendarHeader } from './CalendarHeader';
import { CalendarTable } from './CalendarTables';
import moment, { Moment } from 'moment';

export enum TimeRange {
  Day = 'DAY',
  Week = 'WEEK',
  Month = 'MONTH',
}

const Calendar: FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>(TimeRange.Day);
  const [currentDate, setCurrentDate] = useState<Moment>(moment());

  return (
    <div className={scss['calendar-container']}>
      <CalendarHeader
        timeRange={timeRange}
        setTimeRange={setTimeRange}
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />
      <CalendarTable timeRange={timeRange} />
    </div>
  );
};

export { Calendar };
