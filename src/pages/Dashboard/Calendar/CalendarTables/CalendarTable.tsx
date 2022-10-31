import { time } from 'console';
import React, { FC } from 'react';
import { TimeRange } from '../Calendar';

import { CalendarTableDay, CalendarTableWeek, CalendarTableMonth } from '.';

interface CalendarTableProps {
  timeRange: TimeRange;
}

const CalendarTable: FC<CalendarTableProps> = ({ timeRange }) => {
  switch (timeRange) {
    case TimeRange.Day:
      return <CalendarTableDay />;
    case TimeRange.Week:
      return <CalendarTableWeek />;
    case TimeRange.Month:
      return <CalendarTableMonth />;
  }
};

export { CalendarTable };
