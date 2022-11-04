import { FC } from 'react';

import scss from './events.module.scss';

import { getTimeFromDate, stringToColor, rooms } from 'utils';
import { clock } from 'assets/images/icons';

import { EventProps } from '../constants';
import { getEventPosition } from '../utils';

const Event: FC<EventProps> = (eventData) => {
  const { name } = eventData;

  const lineColor = stringToColor(name ?? '');
  const { styles, currentEventHeight } = getEventPosition(rooms, eventData);

  return (
    <div className={scss['event__container']} style={styles}>
      <div className={scss['event']}>
        <div
          className={scss['event__colored-line']}
          style={{ background: lineColor }}
        />
        {eventData && buildEventContentDay(currentEventHeight, eventData)}
      </div>
    </div>
  );
};

export { Event };

const buildEventContentDay = (
  eventHeight: number,
  eventData: EventProps
): JSX.Element => {
  const { name, description, startDate, endDate } = eventData;

  const startTime = getTimeFromDate(startDate);
  const endTime = getTimeFromDate(endDate);

  if (eventHeight <= 32) {
    return (
      <div data-size={'small'}>
        <h3 className={scss['event__header']}>{name}</h3>
      </div>
    );
  }

  if (eventHeight <= 72) {
    return (
      <div data-size={'medium'}>
        <h3 className={scss['event__header']}>{name}</h3>
        {getClockContent(startTime, endTime)}
      </div>
    );
  }

  if (eventHeight <= 180)
    return (
      <div data-size={'large'}>
        <h3 className={scss['event__header']}>{name}</h3>
        <p className={scss['event__description']}>{description}</p>
        {getClockContent(startTime, endTime)}
      </div>
    );

  return (
    <div data-size={'ultra-large'}>
      <h3 className={scss['event__header']}>{name}</h3>
      <p className={scss['event__description']}>{description}</p>
      {getClockContent(startTime, endTime)}
    </div>
  );
};

const getClockContent = (startTime: string, endTime: string): JSX.Element => {
  return (
    <div className={scss['clock']}>
      <img src={clock} alt={'clock'} />
      <p>
        {startTime} - {endTime}
      </p>
    </div>
  );
};
