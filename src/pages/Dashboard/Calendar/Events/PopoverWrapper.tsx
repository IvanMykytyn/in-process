import { ClickAwayListener } from '@mui/material';
import { FC } from 'react';
import { PopoverEvent } from './PopoverEvent';

import scss from './events.module.scss';
import { useAppDispatch } from '../../../../hooks';
import { togglePopover } from 'store/slices/booking.slice';
import { ExtendedSingleBooking, ExtendedSingleISOBooking } from 'models';
import moment from 'moment';

type PopoverWrapperProps = {
  event: ExtendedSingleISOBooking;
};

const PopoverWrapper: FC<PopoverWrapperProps> = ({ event }) => {
  const dispatch = useAppDispatch();

  const handleClickAway = () => {
    dispatch(togglePopover());
  };

  const { start, end } = event || {};
  const currBooking: ExtendedSingleBooking = {
    ...event,
    start: moment(start),
    end: moment(end),
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={scss['event-popover']}>
        <PopoverEvent event={currBooking} />;
      </div>
    </ClickAwayListener>
  );
};

export { PopoverWrapper };
