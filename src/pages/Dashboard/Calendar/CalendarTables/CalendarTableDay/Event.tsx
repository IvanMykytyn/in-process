import React from 'react';

import cn from 'classnames';
import scss from './grid-events.module.scss';

interface Instruments {
  id: string;
  name: string;
}

interface Data {
  roomId: string;
  answer: {
    date: string;
    time: {
      hours: number;
      minutes: number;
    };
    room: string;
    instruments: Instruments[];
  };
}

const data: Data = {
  roomId: 'room 1',
  answer: {
    date: '2022-10-30',
    time: {
      hours: 8,
      minutes: 30,
    },
    room: '1',
    instruments: [
      {
        id: '0',
        name: 'board',
      },
      {
        id: '1',
        name: 'tv',
      },
      {
        id: '2',
        name: 'markers',
      },
    ],
  },
};
const { hours, minutes } = data.answer.time;

// TODO fix 11.75 value
const styles = {
  left: `${140 + 140}px`,
  top: `${hours * 25 * 4 + minutes * (25 / 15) + 11.75}px`,
  height: `${125}px`
};

const Event = () => {
  return (
    <div className={scss['event__container']} style={styles}>
      
    </div>
  );
};

export { Event };
