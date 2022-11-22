import { useAppDispatch, useAppSelector } from 'hooks';
import { FC, useEffect } from 'react';
import { getAllRooms, selectRooms } from 'store';

// styles
import scss from './calendar-day.module.scss';

const CalendarDayHeader: FC = () => {
  const dispatch = useAppDispatch();
  const { rooms } = useAppSelector(selectRooms);

  useEffect(() => {
    dispatch(getAllRooms({ officeId: 2 }));
  }, [dispatch]);

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
