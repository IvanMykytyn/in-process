import { arrowLeft, arrowRight } from 'assets/images/icons';
import React, { FC, useState } from 'react';
import { TimeRange } from './Calendar';

// styles
import cn from 'classnames';
import scss from './calendar.module.scss';
import { getDate, getNextDay, getPreviousDay } from 'utils';
import { SetStateType } from 'models';
import { Moment } from 'moment';
import { ButtonGroup } from './ButtonGroup/ButtonGroup';
import { MainCalendar } from 'components';

interface CalendarHeaderProps {
  timeRange: TimeRange;
  setTimeRange: SetStateType<TimeRange>;
  currentDate: Moment;
  setCurrentDate: SetStateType<Moment>;
}

const CalendarHeader: FC<CalendarHeaderProps> = ({
  setTimeRange,
  timeRange,
  currentDate,
  setCurrentDate,
}) => {
  const [isOpenMiniCalendar, setIsOpenMiniCalendar] = useState<boolean>(false);
  const { month, day, year, hour, minutes } = getDate(currentDate);

  const nextDate = () => {
    setCurrentDate((currDate) => getNextDay(currDate));
  };

  const previousDate = () => {
    setCurrentDate((currDate) => getPreviousDay(currDate));
  };

  const handleClickAway = (_: MouseEvent | TouchEvent) =>
    setIsOpenMiniCalendar(false);

  return (
    <div className={scss['calendar-header__container']}>
      <div />
      <div className={scss['current-date__section']}>
        <button type="button" className={scss['arrow-btn']} onClick={previousDate}>
          <img src={arrowLeft} alt="arrow-left" />
        </button>

        <div
          role={'button'}
          className={scss['current-date']}
          onClick={() => setIsOpenMiniCalendar(true)}
        >
          <h3 className={scss['current-date__month-day']}>
            {month} {timeRange === TimeRange.Day && day}
          </h3>
          <h4 className={scss['current-date__year']}>{year}</h4>

          {isOpenMiniCalendar && (
            <div className={scss['mini-calendar']}>
              <MainCalendar handleClickAway={handleClickAway} 
              setDate={setCurrentDate} date={currentDate}/>
            </div>
          )}
        </div>

        <button type="button" className={scss['arrow-btn']} onClick={nextDate}>
          <img src={arrowRight} alt="arrow-left" />
        </button>
      </div>
      <div className={scss['button-group-time-range']}>
        <ButtonGroup setTimeRange={setTimeRange} timeRange={timeRange} />
      </div>
    </div>
  );
};

export { CalendarHeader };
