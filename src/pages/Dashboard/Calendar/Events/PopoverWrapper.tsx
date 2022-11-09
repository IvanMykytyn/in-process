import { Popover } from '@mui/material';
import { SetStateType } from 'models';
import { FC } from 'react';
import { ExtendedEventProps } from './Event';
import { PopoverEvent } from './PopoverEvent';

type PopoverWrapperProps = {
  id: 'simple-popover' | undefined;
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  setAnchorEl: SetStateType<HTMLButtonElement | null>;
  event: ExtendedEventProps;
};

const PopoverWrapper: FC<PopoverWrapperProps> = ({
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
      <PopoverEvent handleClose={handleClose} event={event} />
    </Popover>
  );
};

export { PopoverWrapper };
