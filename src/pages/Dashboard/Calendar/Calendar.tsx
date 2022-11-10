import { FC, useEffect, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';

import interactionPlugin from '@fullcalendar/interaction';

import dayViewPlugin from './DayCalendar/DayCalendarPlugin';

// styles
import './calendar.styles.scss';

import { TimeSlot } from './Grid';
import { buildEvents } from './FullCalendarComponents/BuildEvent';
import { bookings, colorFromString } from 'utils';
import moment from 'moment';
import { useAppSelector } from 'store';
import { selectBooking } from 'store/slices/bookingSlice';

const Calendar: FC = () => {
  const calendarRef = useRef<null | any>(null);
  const { isSideBarOpen, bookings } = useAppSelector(selectBooking);

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

  useEffect(() => {
    calendarRef?.current?.getApi?.().updateSize();
  }, [isSideBarOpen]);

  useEffect(() => {
    calendarRef?.current?.getApi?.().rerenderEvents();
  }, [bookings]);


  const scrollTo = moment().format('HH') + ':00:00';

  return (
    <div className="full-calendar">
      <FullCalendar
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          dayViewPlugin,
          listPlugin,
        ]}
        windowResizeDelay={200}
        timeZone={'local'}
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
          left: 'addBooking today',
          center: 'prev,title,next',
          right: 'day,timeGridWeek,dayGridMonth,listWeek',
        }}
        // headerToolbar={{
        //   left: 'addBooking',
        //   center: 'prev,title,next',
        //   right: 'today day,timeGridWeek,dayGridMonth,listWeek',
        // }}
        // editable={true}
        selectable={false}
        selectMirror={false}
        dayMaxEvents={true}
        nowIndicator={true}
        // event
        events={fullCalendarBookings}
        eventContent={buildEvents}
        eventClick={(props) => console.log(props)}
        // buttons
        customButtons={{
          addBooking: {
            text: 'Add',
            click: function () {
              alert('clicked the custom button!');
            },
          },
        }}
      />
    </div>
  );
};

export { Calendar };
