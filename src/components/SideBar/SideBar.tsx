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
import Moment from 'react-moment';

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
            date: '2022-11-13',
            time: {
                hours: 18,
                minuts: 30
            },
            room: '1',
            instruments: [
                {
                    id: '0',
                    name: 'board'
                },
                {
                    id: '1',
                    name: 'tv'
                },
                {
                    id: '2',
                    name: 'markers'
                }
            ]
        }
    },
    {
        roomId: 'room 2',
        answer: {
            date: '2022-11-11',
            time: {
                hours: 18,
                minuts: 30
            },
            room: '2',
            instruments: [
                {
                    id: '1',
                    name: 'tv'
                },
                {
                    id: '2',
                    name: 'markers'
                }
            ]
        }
    },
    {
        roomId: 'room 3',
        answer: {
            date: '2022-11-14',
            time: {
                hours: 18,
                minuts: 30
            },
            room: '3',
            instruments: [
                {
                    id: '0',
                    name: 'board'
                },
                {
                    id: '2',
                    name: 'markers'
                }
            ]
        }
    }, {
        roomId: 'room 4',
        answer: {
            date: '2022-11-03',
            time: {
                hours: 14,
                minuts: 30
            },
            room: '4',
            instruments: [
                {
                    id: '1',
                    name: 'tv'
                },
                {
                    id: '2',
                    name: 'markers'
                }
            ]
        }
    },
    {
        roomId: 'room 5',
        answer: {
            date: '2022-11-06',
            time: {
                hours: 20,
                minuts: 30
            },
            room: '5',
            instruments: [
                {
                    id: '0',
                    name: 'board'
                },
                {
                    id: '2',
                    name: 'markers'
                }
            ]
        }
    },
    {
        roomId: 'room 6',
        answer: {
            date: '2022-11-03',
            time: {
                hours: 16,
                minuts: 20
            },
            room: '6',
            instruments: [
                {
                    id: '0',
                    name: 'board'
                },
                {
                    id: '1',
                    name: 'tv'
                },
            ]
        }
    },
    {
        roomId: 'room 7',
        answer: {
            date: '2022-11-03',
            time: {
                hours: 17,
                minuts: 0
            },
            room: '7',
            instruments: [
                {
                    id: '1',
                    name: 'tv'
                },
                {
                    id: '2',
                    name: 'markers'
                }
            ]
        }
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


const SideBar: FC = () => {
    const { isSideBarOpen } = useAppSelector(selectBooking);
    const dispatch = useAppDispatch();

    const handleClick = () => {
      dispatch(toggleSideBar());
    };

    const roomsTimeSort = data && data.sort((a, b) =>
        Number(moment(`${a.answer.date} ${a.answer.time.hours}:${a.answer.time.minuts}:00`))
        -
        Number(moment(`${b.answer.date} ${b.answer.time.hours}:${b.answer.time.minuts}:00`))
    );

    return (
        <div className={isSideBarOpen ? `${scss.sidebar}` : `${scss.sidebar} ${scss.hide}`}>
            <div className={cn(scss.wrapper)}>
                <button className={cn(scss.burger)} onClick={handleClick}>
                    Menu
                </button>
                <ul className={isSideBarOpen ? `${scss.info}` : `${scss.info} ${scss.hide}`}>
                    <li>
                        <button className={cn(scss.info__settings)}>
                            <Link to={'/dashboard/settings'}>
                                <div className={cn(scss.info__svg)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        width={30}
                                        height={30}
                                    >
                                        <path
                                            d="M495.9 166.6c3.2 8.7 .5 18.4-6.4
                                         24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7
                                          25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9
                                           6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7
                                            23.3-15.8 34.3l-4.7 8.1c-6.6 11-14
                                             21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5
                                              6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44
                                               25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"/>
                                    </svg>
                                </div>
                            </Link>
                        </button>
                    </li>
                    <li>
                        <button className={cn(scss.info__userName)}>
                            User Name
                        </button>
                    </li>
                    <li>
                        <button className={cn(scss.info__userImg)}>
                            <div className={cn(scss.info__svg)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    width={30}
                                    height={30}
                                >
                                    <path
                                        d="M224 0c70.7 0 128 57.3 128 128s-57.3 128-128 128s-128-57.3-128-128S153.3
                                       0 224 0zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0
                                        20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 39.5-161.2c77.2 12 136.3 78.8 136.3
                                         159.4c0 17-13.8 30.7-30.7 30.7H265.1 182.9 30.7C13.8 512 0 498.2 0 481.3c0-80.6
                                          59.1-147.4 136.3-159.4l39.5 161.2 33.4-123.9z"/>
                                </svg>
                            </div>
                        </button>
                    </li>
                </ul>
                <div className={scss.inner}>
                    <span className={isSideBarOpen ? `${scss.clock}` : `${scss.clock} ${scss.hide}`}>
                        <img src={clock} alt="clock" width={15} height={15} color={'red'}/>
                        <Moment locale={'uk'} local={true} format={`LLL`} interval={30000}/>
                    </span>
                    <ul className={isSideBarOpen ? `${scss.booked}` : `${scss.booked} ${scss.hide}`}>
                        {
                            roomsTimeSort.map((value) =>
                                <BookedRoom key={value.answer.room} room={value}/>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
        ;
};

export { SideBar };
