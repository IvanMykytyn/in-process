import { FC, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import dayViewPlugin from './DayCalendar/DayCalendarPlugin';

// styles
import './calendar.styles.scss';

import { TimeSlot } from './Grid';
import { buildEvents } from './FullCalendarComponents/BuildEvent';
import { bookings, colorFromString } from 'utils';
import moment from 'moment';

const Calendar: FC = () => {
  const calendarRef = useRef<null | any>(null);

  const fullCalendarBookings = bookings.map((book) => {
    const { name, start, end, description, roomId, id, users } = book;

    return {
      id: id.toString(),
      title: name,
      start,
      end,
      extendedProps: {
        description: description,
        roomId: roomId,
        users: users,
        color: colorFromString(name ?? ''),
      },
    };
  });

  // TODO fix button group animation bug
  // change today button
  // custom button + event
  // change classes
  const scrollTo = moment().format('HH') + ':00:00';

  return (
    <div className="full-calendar">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, dayViewPlugin]}
        initialView={'day'}
        locale={'en-GB'}
        scrollTime={scrollTo}
        // slot
        slotLabelInterval={'01:00'}
        slotDuration={'01:00'}
        slotLabelFormat={{
          hour: 'numeric',
          minute: '2-digit',
          omitZeroMinute: false,
        }}
        slotLabelContent={(props) => (
          <TimeSlot hour={+props.text.split(':')[0]} {...props} />
        )}
        // header
        headerToolbar={{
          left: 'today',
          center: 'prev,title,next',
          right: 'day,timeGridWeek,dayGridMonth',
        }}
        // editable={true}
        selectable={true}
        dayMaxEvents={true}
        selectMirror={false}
        nowIndicator={true}
        // event
        events={fullCalendarBookings}
        eventContent={buildEvents}
        eventClick={(props) => console.log(props)}
      />
    </div>
  );

  function goNext() {
    calendarRef.current.getApi().updateSize();
  }
};

export { Calendar };
