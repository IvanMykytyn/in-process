import { useAppSelector } from 'hooks';
import { FC } from 'react';
import { selectRooms } from 'store';

// styles
import scss from './calendar-day.module.scss';

const CalendarDayHeader: FC = () => {
  const { rooms } = useAppSelector(selectRooms);

  return (
    <ul className={scss['calendar__header']}>
      {rooms.map((room) => {
        return (
          <li key={room.id} className={scss['calendar__header-room']}>
            {room.name} / {room.floor} floor
          </li>
        );
      })}
    </ul>
  );
};

export { CalendarDayHeader };
