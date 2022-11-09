import { FC } from 'react';
import { rooms } from 'utils';

// styles
import scss from './calendar-day.module.scss';

const CalendarDayHeader: FC = () => {
  return (
    <ul className={scss['calendar__header']}>
      {rooms.map((room) => {
        return (
          <li key={room.id} className={scss['calendar__header-room']}>
            {room.name}
          </li>
        );
      })}
    </ul>
  );
};

export { CalendarDayHeader };
