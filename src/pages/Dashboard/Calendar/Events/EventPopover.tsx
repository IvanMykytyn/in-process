import { Popover } from '@mui/material';
import { SetStateType } from 'models';
import React, { FC, useState } from 'react';
import { Event } from 'utils';
import { EventProps } from '../constants';
import scss from './events.module.scss';
import { PopoverContent } from './PopoverContent';

type EventPopoverProps = {
  id: 'simple-popover' | undefined;
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  setAnchorEl: SetStateType<HTMLButtonElement | null>;
  event: Event | EventProps;
  // handleClose: () => void;
};

const EventPopover: FC<EventPopoverProps> = ({
  id,
  open,
  anchorEl,
  setAnchorEl,
  event,
}) => {
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Popover
      id={id}
      open={open}
      onClose={handleClose}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      <PopoverContent handleClose={handleClose} event={event} />
    </Popover>
  );
};

export { EventPopover };
