import { FC } from 'react';

import cn from 'classnames';
import scss from '../Events/events.module.scss';
import { getTotalColumns } from '../utils';
import { useAppSelector } from 'hooks';
import { selectRooms } from 'store';

const GridColumns: FC = () => {
  const { rooms } = useAppSelector(selectRooms);

  const totalColumns = getTotalColumns(rooms.length);
  return (
    <div className={cn(scss['grid-container'], scss['grid-container__columns'])}>
      {totalColumns.map((id) => {
        return <div key={id} className={scss['grid-column']} />;
      })}
    </div>
  );
};

export { GridColumns };
