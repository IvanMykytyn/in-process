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
import { FC } from 'react';
import { getFullDateRange } from 'utils';

import cn from 'classnames';
import scss from './events.module.scss';
import { EventProps } from '../constants';
import { selectUser, useAppSelector } from 'store';

type PopoverEventProps = {
  handleClose: () => void;
  event: EventProps;
};

const PopoverEvent: FC<PopoverEventProps> = ({ handleClose, event }) => {
  const { user } = useAppSelector(selectUser);
  const { name, description, start, end, color, users } = event;

  const handleEdit = () => {};
  const handleDelete = (props: any) => console.log(props);

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
              onClick={handleDelete}
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
