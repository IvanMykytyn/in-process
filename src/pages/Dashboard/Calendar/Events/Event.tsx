import { FC, useState } from 'react';

import scss from './events.module.scss';

import { getTimeFromDate, stringToColor, rooms } from 'utils';
import { clock } from 'assets/images/icons';

import { EventProps } from '../constants';
import { getEventPosition } from '../utils';
import { EventPopover } from './EventPopover';

const Event: FC<EventProps> = (eventData) => {
  const { name } = eventData;

  const lineColor = stringToColor(name ?? '');
  const { styles, currentEventHeight } = getEventPosition(rooms, eventData);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <div className={scss['event__container']} role={'button'} style={styles} onClick={handleClick}>
        <div className={scss['event']}>
          <div
            className={scss['event__colored-line']}
            style={{ background: lineColor }}
          />
          {eventData && buildEventContentDay(currentEventHeight, eventData)}
        </div>
      </div>
      <EventPopover
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        open={open}
        id={id}
        event={eventData}
      />
    </>
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
