import { ClickAwayListener } from "@mui/material";
import { FC, useMemo } from "react";
import { PopoverEvent } from "./PopoverEvent";

import scss from "./events.module.scss";
import { useAppDispatch } from "../../../../hooks";
import { togglePopover } from "store/slices/booking.slice";
import { ExtendedSingleBooking, ExtendedSingleISOBooking } from "models";
import moment from "moment";

type PopoverWrapperProps = {
  event: ExtendedSingleISOBooking;
};

const PopoverWrapper: FC<PopoverWrapperProps> = ({ event }) => {
  const dispatch = useAppDispatch();

  const handleClickAway = () => {
    dispatch(togglePopover());
  };

  const currBooking: ExtendedSingleBooking = useMemo(() => {
    const { start, end } = event || {};
    return {
      ...event,
      start: moment(start),
      end: moment(end),
    };
  }, [event]);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={scss["event-popover"]}>
        <PopoverEvent event={currBooking} />;
      </div>
    </ClickAwayListener>
  );
};

export { PopoverWrapper };
