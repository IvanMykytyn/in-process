import { FC } from 'react';
import { selectUser } from 'store';
import {useAppDispatch, useAppSelector} from '../../../../hooks';

import cn from 'classnames';
import scss from './events.module.scss';

import {
  creator,
  details,
  edit,
  exit,
  location,
  people,
  room,
  trash,
} from 'assets/images/icons';
import { getFullDateRange } from 'utils';
import { EventProps } from '../constants';
import { removeBooking, togglePopover } from 'store/slices/booking.slice';

type PopoverEventProps = {
  event: EventProps;
};

const PopoverEvent: FC<PopoverEventProps> = ({ event }) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(selectUser);
  const { name, description, start, end, color, users, id } = event;

  const handleEdit = () => {};
  const handleClose = () => {
    dispatch(togglePopover());
  };
  const handleDelete = (id: number) => {
    dispatch(removeBooking(id));
    handleClose();
  };

  const showControlIcons: boolean =
    user?.role === 'admin' || users.some((item) => item.email === user?.email);

  const usersEmails = users.map((user) => user.email);

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
              onClick={() => handleDelete(id)}
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
            <ContentWithIcon icon={people} text={usersEmails.join(', ')} />
            <ContentWithIcon icon={details} text={description} />
            <ContentWithIcon
              icon={creator}
              text={'Creator Name'}
              className={'align-center'}
            />
            <ContentWithIcon
              icon={room}
              text={'Room N'}
              className={'align-center'}
            />
            <ContentWithIcon
              icon={location}
              text={'Office Address'}
              className={'align-center'}
            />
          </div>
        </div>
      </main>
      <div className={scss['event__colored-line']} style={{ background: color }} />
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
