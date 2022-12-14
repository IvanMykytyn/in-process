import { FC, useCallback, useMemo } from 'react';

import cn from 'classnames';
import scss from './events.module.scss';

import { getTimeFromDate } from 'utils';
import { clock } from 'assets/images/icons';

import { getEventPosition } from '../utils';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { setCurrentBooking, togglePopover } from 'store/slices/booking.slice';
import { selectRooms } from 'store';
import { ExtendedSingleBooking } from 'models';

const Event: FC<ExtendedSingleBooking> = (eventData) => {
  const dispatch = useAppDispatch();
  const { rooms } = useAppSelector(selectRooms);
  const {isBookingLoading} = useAppSelector(store=> store.bookings)

  const { color, viewType } = eventData;

  const eventPosition = useMemo(
    () => getEventPosition(rooms, eventData),
    [rooms, eventData]
  );
  const { styles, currentEventHeight } = eventPosition;

  const isDayViewType = viewType === 'day';

  const handleClick = () => {
    dispatch(
      setCurrentBooking({
        ...eventData,
        start: eventData.start.toISOString(),
        end: eventData.end.toISOString(),
      })
    );
    dispatch(togglePopover());
  };
  if(isBookingLoading){
    return <></>
  }

  return (
    <>
      <div
        className={cn(scss['event__container'], scss[`${viewType}`])}
        role={'button'}
        style={isDayViewType ? styles : {}}
        onClick={handleClick}
      >
        <div className={scss['event']}>
          <div
            className={scss['event__colored-line']}
            style={{ background: color }}
          />
          {eventData && buildEventContentDay(currentEventHeight, eventData)}
        </div>
      </div>
    </>
  );
};

export { Event };

const buildEventContentDay = (
  eventHeight: number,
  eventData: ExtendedSingleBooking
): JSX.Element => {
  const { name, description, start, end, viewType } = eventData;

  const startTime = getTimeFromDate(start);
  const endTime = getTimeFromDate(end);

  const isDayViewType = viewType === 'day';
  const isMonthViewType = viewType === 'month';
  const isListViewType = viewType === 'list';

  if (isMonthViewType) {
    const clockContent = getClockContent(getTimeFromDate(start));
    return (
      <div className={scss['event-calendar-content']}>
        <h3 className={scss['event__month-title']}>{name}</h3>
        {clockContent}
      </div>
    );
  }
  if (isListViewType) {
    return (
      <div className={scss['event-calendar-content-list']}>
        <h3 className={scss['event__month-title']}>{name}</h3>
        {/* {clockContent} */}
      </div>
    );
  }

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
        {isDayViewType && getClockContent(startTime, endTime)}
      </div>
    );
  }

  if (eventHeight <= 180)
    return (
      <div data-size={'large'}>
        <h3 className={scss['event__header']}>{name}</h3>
        <p className={scss['event__description']}>{description}</p>
        {isDayViewType && getClockContent(startTime, endTime)}
      </div>
    );

  return (
    <div data-size={'ultra-large'}>
      <h3 className={scss['event__header']}>{name}</h3>
      <p className={scss['event__description']}>{description}</p>
      {isDayViewType && getClockContent(startTime, endTime)}
    </div>
  );
};

const getClockContent = (startTime: string, endTime?: string): JSX.Element => {
  return (
    <div className={scss['clock']}>
      <img src={clock} alt={'clock'} />
      <p>
        {startTime}
        {endTime && ` - ${endTime}`}
      </p>
    </div>
  );
};
