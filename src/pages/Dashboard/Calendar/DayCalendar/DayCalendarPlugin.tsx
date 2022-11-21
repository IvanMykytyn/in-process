import { FC } from 'react';
import { sliceEvents, createPlugin } from '@fullcalendar/core';
import { CalendarDay } from './CalendarDay';

const dayCalendarPlugin: FC = (props: any) => {
  let events = sliceEvents(props, false); 

  return (
    <CalendarDay
      {...props}
      events={events}
      currentDate={props.dateProfile?.activeRange?.start}
    />
  );
};

export default createPlugin({
  views: {
    day: dayCalendarPlugin,
  },
});
