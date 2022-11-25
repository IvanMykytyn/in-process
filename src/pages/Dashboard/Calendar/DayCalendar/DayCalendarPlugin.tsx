import { FC } from 'react';
import { CalendarDay } from './CalendarDay';
import { createPlugin, sliceEvents } from '@fullcalendar/react';

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
