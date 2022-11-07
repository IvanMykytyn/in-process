import React, { FC, PropsWithChildren, useRef, useState } from 'react';
import FullCalendar, { EventContentArg } from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import dayViewPlugin from './DayCalendar/DayCalendarPlugin';

// styles
import './calendar.styles.scss';
import scssOfEvent from './Events/events.module.scss';
import scss from './Events/events.module.scss';

import { TimeSlot } from './Grid';
import {
  Event,
  events,
  getDiffInMinutes,
  getTimeFromDate,
  stringToColor,
} from 'utils';
import moment from 'moment';
import { getPixelsFromTop } from './utils';
import { clock } from 'assets/images/icons';
import { EventProps } from './constants';
import { EventPopover } from './Events';
import { Popover } from '@mui/material';

const Calendar: FC = () => {
  const calendarRef = useRef<null | any>(null);

  const fullCalendarEvents = events.map((event) => {
    const { name, startDate, endDate, description, roomId, id } = event;

    return {
      id,
      title: name,
      start: startDate,
      end: endDate,
      extendedProps: {
        description: description,
        roomId: roomId,
      },
    };
  });

  // TODO fix button group animation bug
  // change today button
  // custom button + event
  // additional information about event
  // change classes
  return (
    <div className="full-calendar">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, dayViewPlugin]}
        initialView={'day'}
        locale={'en-GB'}
        scrollTime={Date.now()}
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
        events={fullCalendarEvents}
        eventContent={buildEventContent}
        eventBackgroundColor={'#dcdcdc'}
        eventClick={(props) => console.log(props)}
      />
    </div>
  );

  function goNext() {
    calendarRef.current.getApi().updateSize();
  }
};

export { Calendar };

const buildEventContent = (props: EventContentArg) => {
  const {
    _def: { title, extendedProps, publicId },
  } = props.event;
  const start = moment(props.event._instance?.range.start);
  const end = moment(props.event._instance?.range.end);

  const { description, roomId } = extendedProps;

  const durationInMinutes = getDiffInMinutes(start, end);
  const currentEventHeight = getPixelsFromTop(durationInMinutes);

  const event = {
    id: publicId,
    name: title,
    description,
    roomId,
    startDate: start,
    endDate: end,
  };

  if (props.view.type === 'timeGridWeek') {
    return (
      <EventWrapper event={event}>
        {buildLargeEventBody(currentEventHeight, {
          name: title,
          description: description,
        })}
      </EventWrapper>
    );
  }

  return (
    <EventWrapper event={event}>
      {buildSmallEventBody({
        title,
        start,
      })}
    </EventWrapper>
  );
};

interface EventWrapperProps extends PropsWithChildren {
  event: any;
}

const EventWrapper: FC<EventWrapperProps> = ({ event, children }) => {
  const { name } = event;
  const lineColor = stringToColor(name ?? '');
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <div
        role={'button'}
        className={'event-calendar-container'}
        // aria-describedby={idd}
        onClick={handleClick}
      >
        <div className={'event__colored-line'} style={{ background: lineColor }} />
        <>{children}</>
      </div>
      <EventPopover
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        open={open}
        id={id}
        event={event}
      />
    </>
  );
};

interface buildLargeEventBodyProps {
  name: string;
  description: string;
}

const buildLargeEventBody = (
  eventHeight: number,
  eventData: buildLargeEventBodyProps
): JSX.Element => {
  const { name, description } = eventData;

  if (eventHeight <= 32) {
    return (
      <div data-size={'small'}>
        <h3 className={scssOfEvent['event__header']}>{name}</h3>
      </div>
    );
  }

  if (eventHeight <= 72) {
    return (
      <div data-size={'medium'}>
        <h3 className={scssOfEvent['event__header']}>{name}</h3>
      </div>
    );
  }

  if (eventHeight <= 180)
    return (
      <div data-size={'large'}>
        <h3 className={scssOfEvent['event__header']}>{name}</h3>
        <p className={scssOfEvent['event__description']}>{description}</p>
      </div>
    );

  return (
    <div data-size={'ultra-large'}>
      <h3 className={scssOfEvent['event__header']}>{name}</h3>
      <p className={scssOfEvent['event__description']}>{description}</p>
    </div>
  );
};

// TODO change any type
interface buildSmallEventBodyProps {
  title: string;
  start: any;
}

const buildSmallEventBody: FC<buildSmallEventBodyProps> = ({ title, start }) => {
  const clockContent = buildClockContent(getTimeFromDate(start));
  return (
    <div className="event-calendar-content">
      <h3 className={'event__title'}>{title}</h3>
      {clockContent}
    </div>
  );
};

const buildClockContent = (startTime: string): JSX.Element => {
  return (
    <div className={'clock-calendar-container'}>
      <img src={clock} alt={'clock'} />
      <p>{startTime}</p>
    </div>
  );
};
