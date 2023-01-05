import { FC, useMemo } from 'react';

import cn from 'classnames';
import scss from './events.module.scss';

import { getTimeFromDate } from 'utils';
import { clock, lock } from 'assets/images/icons';

import { getEventPosition } from '../utils';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { setCurrentBooking, togglePopover } from 'store/slices/booking.slice';
import { selectRooms, selectUser } from 'store';
import { ExtendedSingleBooking } from 'models';

const Event: FC<ExtendedSingleBooking> = (eventData) => {
  const dispatch = useAppDispatch();
  const { rooms } = useAppSelector(selectRooms);
  const { user } = useAppSelector(selectUser);
  const {isBookingLoading} = useAppSelector(store=> store.bookings)

  const { color, viewType } = eventData;
  const showEvent = (eventData.creator.email === user?.email) || user?.role === 'admin' || user?.role === 'user' 

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
        onClick={showEvent ? handleClick : undefined}
      >
        <div className={cn(scss['event'], !showEvent ? scss['private-event']: null)}>
          <div
            className={scss['event__colored-line']}
            style={{ background: color }}
          />
          {eventData && buildEventContentDay(currentEventHeight, eventData, showEvent)}
        </div>
      </div>
    </>
  );
};

export { Event };

const buildEventContentDay = (
  eventHeight: number,
  eventData: ExtendedSingleBooking,
  showEvent: boolean,
): JSX.Element => {
  const { name: evenName, description, start, end, viewType } = eventData;

  const startTime = getTimeFromDate(start);
  const endTime = getTimeFromDate(end);

  const isDayViewType = viewType === 'day';
  const isMonthViewType = viewType === 'month';
  const isWeekViewType = viewType === 'week';
  const isListViewType = viewType === 'list';


  const name = showEvent ? evenName : 'Private Booking'
  if (isMonthViewType) {
    const clockContent = getClockContent(showEvent, getTimeFromDate(start));
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
        {!showEvent && <img className={scss['event_lock-icon']} src={lock} alt="lock" />}
        <h3 className={scss['event__month-title']}>{name}</h3>
      </div>
    );
  }

  if (eventHeight <= 32) {
    return (
      <div data-size={'small'}>
        <h3 className={scss['event__header']}>{name}</h3>
        {isWeekViewType && !showEvent && <img className={scss['event_lock-icon']} src={lock} alt="lock" style={{opacity: 0.6}}/>}
     
      </div>
    );
  }

  if (eventHeight <= 72) {
    return (
      <div data-size={'medium'}>
        <h3 className={scss['event__header']}>{name}</h3>
        {isWeekViewType && !showEvent && <img className={scss['event_lock-icon']} src={lock} alt="lock" style={{opacity: 0.6}}/>}
        {isDayViewType && getClockContent(showEvent, startTime, endTime)}
      </div>
    );
  }

  if (eventHeight <= 180)
    return (
      <div data-size={'large'}>
        <h3 className={scss['event__header']}>{name}</h3>
        <p className={scss['event__description']}>{description}</p>
        {isWeekViewType && !showEvent && <img className={scss['event_lock-icon']} src={lock} alt="lock" style={{opacity: 0.6}}/>}
        {isDayViewType && getClockContent(showEvent, startTime, endTime)}
      </div>
    );

  return (
    <div data-size={'ultra-large'}>
      <h3 className={scss['event__header']}>{name}</h3>
      <p className={scss['event__description']}>{description}</p>
      {isWeekViewType && !showEvent && <img className={scss['event_lock-icon']} src={lock} alt="lock" style={{opacity: 0.6}}/>}
      {isDayViewType && getClockContent(showEvent,startTime, endTime)}
    </div>
  );
};

const getClockContent = (showEvent: boolean, startTime: string, endTime?: string): JSX.Element => {
  return (
    <div className={scss['clock']} style={{paddingRight: !showEvent ? 15 : undefined}}>
      {!showEvent && <img className={scss['event_lock-icon']} src={lock} alt="lock" />}

      <img src={clock} alt={'clock'} />
      <p>
        {startTime}
        {endTime && ` - ${endTime}`}
      </p>
    </div>
  );
};
