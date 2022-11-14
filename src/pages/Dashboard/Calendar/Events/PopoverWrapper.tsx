import { ClickAwayListener } from '@mui/material';
import { FC } from 'react';
import { EventProps } from '../constants';
import { PopoverEvent } from './PopoverEvent';

import scss from './events.module.scss';
import { useAppDispatch } from 'store';
import { togglePopover } from 'store/features/bookingSlice';

type PopoverWrapperProps = {
  event: EventProps;
};

const PopoverWrapper: FC<PopoverWrapperProps> = ({ event }) => {
  const dispatch = useAppDispatch();

  const handleClickAway = () => {
    dispatch(togglePopover());
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={scss['event-popover']}>
        <PopoverEvent event={event} />;
      </div>
    </ClickAwayListener>
  );
};

export { PopoverWrapper };
