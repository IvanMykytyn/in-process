import {
  calendar,
  creator,
  details,
  edit,
  exit,
  people,
  trash,
} from 'assets/images/icons';
import React, { FC } from 'react';
import { Event, stringToColor } from 'utils';

import cn from 'classnames';
import scss from './events.module.scss';
import { EventProps } from '../constants';

type Props = {
  handleClose: () => void;
  event: Event | EventProps;
};

const PopoverContent = ({ handleClose, event }: Props) => {
  const { name, description, startDate, endDate } = event;
  const handleEdit = () => {};
  const handleDelete = (props: any) => console.log(props);
  const lineColor = stringToColor(name ?? '');

  return (
    <div className={scss['event-popover']}>
      <header className={scss['tools-bar']}>
        {/* show icons only when user isCreator or Admin */}
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
        <div className={scss['exit-wrapper']}>
          <img
            src={exit}
            alt="exit"
            className={scss['exit-icon']}
            onClick={handleClose}
          />
        </div>
      </header>

      <main className={scss['popover-body']}>
        <div>
          <h3 className={scss['title']}>{name}</h3>
          <p className={scss['date-information']}>
            Friday, 4 November 15:30 - 16:30
          </p>
          <div className={scss['content-wrapper']}>
            <ContentWithIcon
              icon={people}
              text={`sehksjesjkehjks ejkksejhksjehsekhjkeshjseh jkesejksehkejshkjheshsjk ehjk eshj sjekhjkes jkes kjjkeh jskhjesjk jkesjkh jkesjkheh  es   esheshesh s hseh.
              sehksjesjkehjks ejkksejhksjehsekhjkeshjseh jkesejksehkejshkjheshsjk ehjk eshj sjekhjkes jkes kjjkeh jskhjesjk jkesjkh jkesjkheh es esheshesh s hseh.
              sehksjesjkehjks ejkksejhksjehsekhjkeshjseh jkesejksehkejshkjheshsjk ehjk eshj sjekhjkes jkes kjjkeh jskhjesjk jkesjkh jkesjkheh es esheshesh s hseh.
sehksjesjkehjks ejkksejhksjehsekhjkeshjseh jkesejksehkejshkjheshsjk ehjk eshj sjekhjkes jkes kjjkeh jskhjesjk jkesjkh jkesjkheh es esheshesh s hseh.
sehksjesjkehjks ejkksejhksjehsekhjkeshjseh jkesejksehkejshkjheshsjk ehjk eshj sjekhjkes jkes kjjkeh jskhjesjk jkesjkh jkesjkheh es esheshesh s hseh.`}
            />
            <ContentWithIcon
              icon={people}
              text={'Example1@incorainc.com, Example2@incorainc.com'}
            />
            <ContentWithIcon icon={details} text={description} />
            <ContentWithIcon
              icon={creator}
              text={'Ivan Mykytyn'}
              className={'creator'}
            />
          </div>
        </div>
      </main>
        <div
          className={scss['event__colored-line']}
          style={{ background: lineColor }}
        />
    </div>
  );
};

export { PopoverContent };

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
