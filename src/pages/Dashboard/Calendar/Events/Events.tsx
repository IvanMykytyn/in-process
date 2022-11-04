import { FC } from 'react';
import moment from 'moment';
import { EventRenderRange } from '@fullcalendar/react';

import cn from 'classnames';
import scss from './events.module.scss';

import { Event } from './Event';

interface EventsProps {
  events: EventRenderRange[];
}

const Events: FC<EventsProps> = ({ events }) => {
  return (
    <div className={cn(scss['grid-container'], scss['grid-container__events'])}>
      {events.map((event) => {
        const {
          def: { publicId, title, extendedProps },
          range: { start, end },
        } = event;
        const { description, roomId } = extendedProps;

        return (
          <Event
            key={publicId}
            id={publicId}
            name={title}
            description={description}
            roomId={roomId}
            startDate={moment(start)}
            endDate={moment(end)}
          />
        );
      })}
    </div>
  );
};

export { Events };
