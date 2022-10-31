import React from 'react';

import cn from 'classnames';
import scss from './grid-events.module.scss';
import { Event } from './Event';

const GridEvents = () => {
  return (
    <div className={scss['grid-events__container']}>
        <Event />
    </div>
  );
};

export { GridEvents };
