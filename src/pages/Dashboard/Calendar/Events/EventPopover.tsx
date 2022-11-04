import { Popover } from '@mui/material';
import { SetStateType } from 'models';
import React, { FC, useState } from 'react';
import scss from './events.module.scss';

type EventPopoverProps = {
  id: 'simple-popover' | undefined;
  open: boolean;
  isOpen: HTMLButtonElement | null;
  setIsOpen: SetStateType<HTMLButtonElement | null>;
  handleClose: () => void;
};

const EventPopover: FC<EventPopoverProps> = ({
  id,
  open,
  isOpen,
  setIsOpen,
  handleClose,
}) => {
  console.log(open);
  
  return (
    <Popover
      id={id}
      open={open}
      onClose={handleClose}
      anchorEl={isOpen}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      <div className={scss['event-popover']}>The content of the Popover.</div>
    </Popover>
  );
};

export { EventPopover };
