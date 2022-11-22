import { EventContentArg } from '@fullcalendar/react';
import moment from 'moment';

import { Event } from '../Events';

export const buildEvents = (props: EventContentArg) => {
  const {
    _def: { title, extendedProps, publicId },
    _instance,
  } = props.event;

  const start = moment(_instance!.range.start);
  const end = moment(_instance!.range.end);
  const { description, room, users, color, creator, schedule } = extendedProps;

  const currentViewType =
    props.view.type === 'timeGridWeek'
      ? 'week'
      : props.view.type === 'listWeek'
      ? 'list'
      : 'month';

  return (
    <Event
      id={parseInt(publicId)}
      name={title}
      description={description}
      room={room}
      color={color}
      users={users}
      creator={creator}
      start={start.add(-2, 'hours')}
      end={end.add(-2, 'hours')}
      viewType={currentViewType}
      schedule={schedule}
    />
  );
};
