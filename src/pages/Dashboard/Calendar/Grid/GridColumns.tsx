import { FC } from 'react';

import cn from 'classnames';
import scss from '../Events/events.module.scss';

import { totalColumns } from '../constants';

const GridColumns: FC = () => {
  return (
    <div className={cn(scss['grid-container'], scss['grid-container__columns'])}>
      {totalColumns.map((id) => {
        return <div key={id} className={scss['grid-column']} />;
      })}
    </div>
  );
};

export { GridColumns };
