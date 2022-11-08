import 'moment/locale/uk';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from '@mui/material';
import moment from 'moment';

// styles
import cn from 'classnames';
import scss from './sidebar.module.scss';

import { Input } from '../index';
import { setting, search, user, clock } from '../../assets/images/icons';
import { BookedRoom } from 'components/BookedRoom/BookedRoom';
import { useAppDispatch, useAppSelector } from 'store';
import { selectBooking, toggleSideBar } from 'store/features/bookingSlice';

interface Instruments {
  id: string;
  name: string;
}

export interface Data {
  roomId: string;
  answer: {
    date: string;
    time: {
      hours: number;
      minuts: number;
    };
    room: string;
    instruments: Instruments[];
  };
}

const data: Data[] = [
  {
    roomId: 'room 1',
    answer: {
      date: '2022-10-30',
      time: {
        hours: 18,
        minuts: 30,
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
  },
  {
    roomId: 'room 2',
    answer: {
      date: '2022-10-29',
      time: {
        hours: 18,
        minuts: 30,
      },
      room: '2',
      instruments: [
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
  },
  {
    roomId: 'room 3',
    answer: {
      date: '2022-10-27',
      time: {
        hours: 18,
        minuts: 30,
      },
      room: '3',
      instruments: [
        {
          id: '0',
          name: 'board',
        },
        {
          id: '2',
          name: 'markers',
        },
      ],
    },
  },
  {
    roomId: 'room 4',
    answer: {
      date: '2022-10-29',
      time: {
        hours: 18,
        minuts: 30,
      },
      room: '4',
      instruments: [
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
  },
  {
    roomId: 'room 5',
    answer: {
      date: '2022-10-25',
      time: {
        hours: 20,
        minuts: 30,
      },
      room: '5',
      instruments: [
        {
          id: '0',
          name: 'board',
        },
        {
          id: '2',
          name: 'markers',
        },
      ],
    },
  },
  {
    roomId: 'room 6',
    answer: {
      date: '2022-10-25',
      time: {
        hours: 20,
        minuts: 30,
      },
      room: '6',
      instruments: [
        {
          id: '0',
          name: 'board',
        },
        {
          id: '1',
          name: 'tv',
        },
      ],
    },
  },
  {
    roomId: 'room 7',
    answer: {
      date: '2022-10-25',
      time: {
        hours: 12,
        minuts: 10,
      },
      room: '7',
      instruments: [
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
  },
];

const SideBar = () => {
  const { isSideBarOpen } = useAppSelector(selectBooking);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleSideBar());
  };
  //TO DO MOMENT.js
  const mainClock = moment().format('LLL');

  return (
    <div
      className={isSideBarOpen ? `${scss.sidebar}` : `${scss.sidebar} ${scss.hide}`}
    >
      <div className={cn(scss.wrapper)}>
        <button className={cn(scss.burger)} onClick={handleClick}>
          Burger
        </button>
        <ul className={isSideBarOpen ? `${scss.info}` : `${scss.info} ${scss.hide}`}>
          <li>
            <button className={cn(scss.info__settings)}>
              <Link to={'/dashboard/settings'}>
                <img src={setting} alt="setting" height={30} width={30} />
              </Link>
            </button>
          </li>
          <li>
            <button className={cn(scss.info__userName)}>User Name</button>
          </li>
          <li>
            <button className={cn(scss.info__userImg)}>
              <img src={user} alt="user" height={30} width={30} />
            </button>
          </li>
        </ul>
        {/*<div className={isSideBarOpen ? `${scss.input}` : `${scss.input} ${scss.hide}`}>*/}
        {/*    <Input fullWidth={true} label={'Search...'}/>*/}
        {/*</div>*/}
        <div className={scss.inner}>
          <span
            className={
              isSideBarOpen ? `${scss.clock}` : `${scss.clock} ${scss.hide}`
            }
          >
            <img src={clock} alt="clock" width={15} height={15} />
            {mainClock}
          </span>
          <ul
            className={
              isSideBarOpen ? `${scss.booked}` : `${scss.booked} ${scss.hide}`
            }
          >
            {data &&
              data.map((value, index) => (
                <BookedRoom key={value.answer.room} room={value} />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export { SideBar };
