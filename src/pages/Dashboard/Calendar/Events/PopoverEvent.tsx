import { FC, useState } from 'react';

import { oneTimeDelete, recDelete, selectUser } from 'store';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { togglePopover } from 'store/slices/booking.slice';

import cn from 'classnames';
import scss from './events.module.scss';

import {
  creator as creatorIcon,
  details,
  edit,
  exit,
  location,
  people,
  room as roomIcon,
  trash,
} from 'assets/images/icons';
import { ClickAwayListener } from '@mui/material';
import { getFullDateRange } from 'utils';
import { ExtendedSingleBooking } from 'models';
import { Button, Checkbox } from 'components';

type PopoverEventProps = {
  event: ExtendedSingleBooking;
};

const PopoverEvent: FC<PopoverEventProps> = ({ event }) => {
  const dispatch = useAppDispatch();

  const { user } = useAppSelector(selectUser);
  const {
    name,
    description,
    start,
    end,
    color,
    users,
    id,
    creator,
    room,
    schedule,
  } = event;

  const handleEdit = () => {};

  const handleClose = () => {
    dispatch(togglePopover());
  };

  const showControlIcons: boolean =
    user?.role === 'admin' || creator.email === user?.email;

  const usersEmails = users.map((user) => user.email);

  // delete popup
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCancelDelete = () => {
    setIsOpen(false);
  };

  const handleConfirmDelete = (deleteAllType: boolean = false) => {
    if (schedule && deleteAllType) {
      dispatch(recDelete({ scheduleId: schedule.id }));
    } else {
      dispatch(oneTimeDelete({ bookingId: id }));
    }
    setIsOpen(false);
    handleClose();
  };

  return (
    <div className={scss['event-popover']}>
      <header className={scss['tools-bar']}>
        {showControlIcons && (
          <div className={scss['tools-wrapper']}>
            <img
              src={edit}
              alt="edit"
              className={scss['edit-icon']}
              onClick={handleEdit}
            />
            <img
              src={trash}
              alt="trash"
              className={scss['trash-icon']}
              onClick={() => setIsOpen(true)}
            />
          </div>
        )}
        <div className={scss['exit-wrapper']}>
          <img
            src={exit}
            alt="exit"
            className={scss['exit-icon']}
            onClick={handleClose}
          />
        </div>
      </header>

      <main className={scss['body-container']}>
        <div className={scss['body']}>
          <h3 className={scss['title']}>{name}</h3>
          <p className={scss['date-information']}>{getFullDateRange(start, end)}</p>
          <div className={scss['content-wrapper']}>
            {!!description && <ContentWithIcon icon={details} text={description} />}
            {usersEmails.length > 0 && (
              <ContentWithIcon
                className="user-emails"
                icon={people}
                text={usersEmails.join(', ')}
              />
            )}
            <ContentWithIcon
              icon={creatorIcon}
              text={creator.email}
              className={'align-center'}
            />
            <ContentWithIcon
              icon={roomIcon}
              text={`${room.name}/${room.floor}`}
              className={'align-center'}
            />
            <ContentWithIcon
              icon={location}
              text={'Lviv, st. Bohdan Khmelnytskyi, 116A'}
              className={'align-center'}
            />
          </div>
        </div>
      </main>
      <div className={scss['event__colored-line']} style={{ background: color }} />
      <DeletePopover
        isOpen={isOpen}
        isSchedule={!!schedule}
        handleCancel={handleCancelDelete}
        handleConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export { PopoverEvent };

interface ContentWithIconProps {
  icon: string;
  text: string;
  className?: string;
}

const ContentWithIcon: FC<ContentWithIconProps> = ({ icon, text, className }) => {
  return (
    <div className={cn(scss['content-with-icon'], scss[`${className}`])}>
      <img src={icon} className={scss['content-icon']} alt="icon" />
      <p className={scss['content-text']}>{text}</p>
    </div>
  );
};

interface DeletePopoverProps {
  isOpen: boolean;
  isSchedule: boolean;
  handleConfirm: (deleteAllType: boolean) => void;
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
        <div className={scss['delete-popover']}>
          <p className={scss['delete-popover__text']}>Are you sure?</p>
          {isSchedule && (
            <div className={scss['delete-popover__checkbox']}>
              <Checkbox
                circled
                checked={deleteAllType}
                onChange={() => setDeleteAllType((prev) => !prev)}
              />
              <p role={'button'} onClick={() => setDeleteAllType((prev) => !prev)}>
                Delete all of this type
              </p>
            </div>
          )}
          <div className={'delete-popover__buttons'}>
            <Button type={'button'} onClick={handleCancel}>
              No
            </Button>
            <Button
              type={'button'}
              variant="contained"
              onClick={() => handleConfirm(deleteAllType)}
            >
              Yes
            </Button>
          </div>
          <div className={scss['exit-wrapper']}>
            <img
              src={exit}
              alt="exit"
              className={scss['exit-icon']}
              onClick={handleCancel}
            />
          </div>
        </div>
      </ClickAwayListener>
    );
  }
  return <></>;
};
