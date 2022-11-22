import { FC } from 'react';
import moment from 'moment';
import { EventRenderRange } from '@fullcalendar/react';

import cn from 'classnames';
import scss from './events.module.scss';

import { Event } from './Event';

interface EventsGridProps {
  events: EventRenderRange[];
}

const EventsGrid: FC<EventsGridProps> = ({ events }) => {
  return (
    <div className={cn(scss['grid-container'], scss['grid-container__events'])}>
      {events.map((event) => {
        const {
          def: { publicId, title, extendedProps },
          range: { start, end },
        } = event;
        const { description, room, color, users, creator, schedule } = extendedProps;

        return (
          <Event
            key={publicId}
            id={parseInt(publicId)}
            name={title}
            description={description}
            room={room}
            color={color}
            users={users}
            start={moment(start).add(-2,'hours')}
            end={moment(end).add(-2,'hours')}
            creator={creator}
            viewType={'day'}
            schedule={schedule}
          />
        );
      })}
    </div>
  );
};

export { EventsGrid };
