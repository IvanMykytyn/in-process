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
import { colorFromString } from 'utils';
import moment from 'moment';
import { useAppSelector } from '../../../hooks';
import { selectBooking } from 'store/slices/booking.slice';
import { PopoverWrapper } from './Events';

const Calendar: FC = () => {
  const calendarRef = useRef<null | any>(null);
  const { isSideBarOpen, bookings, isPopoverOpen, currentBooking } =
    useAppSelector(selectBooking);

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
    setTimeout(() => {
      calendarRef?.current?.getApi?.().updateSize();
    }, 1200);
  }, [isSideBarOpen]);

  // useEffect(() => {
  //   calendarRef?.current?.getApi?.().refetchEvents();
  // }, [bookings]);

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
        ref={calendarRef}
        timeZone={'local'}
        initialView={'day'}
        locale={'en-GB'}
        scrollTime={scrollTo}
        allDaySlot={false}
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
            click: function () {},
          },
        }}
      />

      {isPopoverOpen && currentBooking && <PopoverWrapper event={currentBooking} />}
    </div>
  );
};

export { Calendar };
