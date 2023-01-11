import { ClickAwayListener } from "@mui/material";
import { FC, useState } from "react";

import scss from "./delete-popover.module.scss";
import { exit } from "assets/images/icons";
import { Checkbox } from "components/Checkbox/Checkbox";
import { Button } from "components/Button/Button";

interface DeletePopoverProps {
  isOpen: boolean;
  isSchedule?: boolean;
  handleConfirm: ([...rest]: any) => void;
  handleCancel: () => void;
}

const DeletePopover: FC<DeletePopoverProps> = ({
  isOpen,
  isSchedule,
  handleCancel,
  handleConfirm,
}) => {
  const [deleteAllType, setDeleteAllType] = useState<boolean>(false);

  if (isOpen) {
    return (
      <ClickAwayListener onClickAway={handleCancel}>
        <div className={scss["delete-popover"]}>
          <p className={scss["delete-popover__text"]}>Are you sure?</p>
          {isSchedule && (
            <div className={scss["delete-popover__checkbox"]}>
              <Checkbox
                circled
                checked={deleteAllType}
                onChange={() => setDeleteAllType((prev) => !prev)}
              />
              <p
                role={"button"}
                onClick={() => setDeleteAllType((prev) => !prev)}
              >
                Delete all of this type
              </p>
            </div>
          )}
          <div className={"delete-popover__buttons"}>
            <Button type={"button"} onClick={handleCancel}>
              No
            </Button>
            <Button
              type={"button"}
              variant="contained"
              onClick={() => handleConfirm(deleteAllType)}
            >
              Yes
            </Button>
          </div>
          <div className={scss["exit-wrapper"]}>
            <img
              src={exit}
              alt="exit"
              className={scss["exit-icon"]}
              onClick={handleCancel}
            />
          </div>
        </div>
      </ClickAwayListener>
    );
  }
  return <></>;
};

export { DeletePopover };
