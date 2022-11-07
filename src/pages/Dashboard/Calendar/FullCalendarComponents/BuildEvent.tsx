import { EventContentArg } from '@fullcalendar/react';
import moment from 'moment';

import './build-event.styles.scss';
import { Event } from '../Events';

export const buildEvents = (props: EventContentArg) => {
  const {
    _def: { title, extendedProps, publicId },
    _instance,
  } = props.event;

  const start = moment(_instance!.range.end);
  const end = moment(_instance!.range.start);
  const { description, roomId, users, color } = extendedProps;

  const currentViewType = props.view.type === 'timeGridWeek' ? 'week' : 'month';

  return (
    <Event
      id={parseInt(publicId)}
      name={title}
      description={description}
      roomId={roomId}
      color={color}
      users={users}
      start={moment(start)}
      end={moment(end)}
      viewType={currentViewType}
    />
  );
};
