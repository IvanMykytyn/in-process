import 'moment/locale/uk';
import { FC, useState } from 'react';
import moment from 'moment';

// styles
import cn from 'classnames';
import scss from './sidebar.module.scss';

import { Input } from '../index';
import { clock } from '../../assets/images/icons';
import { BookedRoom } from 'components/BookedRoom/BookedRoom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectBooking, toggleSideBar } from 'store/slices/booking.slice';
import Moment from 'react-moment';
import { SideBarHeader } from './SideBarHeader';

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
            date: '2022-11-11',
            time: {
                hours: 13,
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
            date: '2022-11-13',
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
            date: '2022-11-16',
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
            date: '2022-11-17',
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
            date: '2022-11-19',
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
                <SideBarHeader />
                <button className={cn(scss.burger)} onClick={handleClick}>
                    Menu
                </button>
                
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
