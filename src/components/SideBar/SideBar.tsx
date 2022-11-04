import 'moment/locale/uk';
import {FC, useState} from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

// styles
import cn from 'classnames';
import scss from './sidebar.module.scss';


import {setting, user, clock} from '../../assets/images/icons';
import {BookedRoom} from 'components/BookedRoom/BookedRoom';
import Moment from 'react-moment';

interface Instruments {
    id: string,
    name: string
}

export interface Data {
    roomId: string;
    answer: {
        date: string;
        time: {
            hours: number,
            minuts: number
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
];

const SideBar: FC = () => {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(true);
    const [selected, setSelected] = useState<number | null>(null);

    const isOpened = () => {
        setIsOpenMenu(!isOpenMenu);
    };
    //TO DO MOMENT.js

    const roomsTimeSort = data && data.sort((a, b) =>
        Number(moment(`${a.answer.date} ${a.answer.time.hours}:${a.answer.time.minuts}:00`))
        -
        Number(moment(`${b.answer.date} ${b.answer.time.hours}:${b.answer.time.minuts}:00`))
    );

    return (
        <div className={isOpenMenu ? `${scss.sidebar}` : `${scss.sidebar} ${scss.hide}`}>
            <div className={cn(scss.wrapper)}>
                <button className={cn(scss.burger)} onClick={isOpened}>
                    Burger
                </button>
                <ul className={isOpenMenu ? `${scss.info}` : `${scss.info} ${scss.hide}`}>
                    <li>
                        <button className={cn(scss.info__settings)}>
                            <Link to={'/dashboard/settings'}>
                                <img src={setting} alt="setting" height={30} width={30}/>
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
                            <img src={user} alt="user" height={30} width={30}/>
                        </button>
                    </li>
                </ul>
                <div className={scss.inner}>
                    <span className={isOpenMenu ? `${scss.clock}` : `${scss.clock} ${scss.hide}`}>
                        <img src={clock} alt="clock" width={15} height={15}/>
                        <Moment locale={'uk'} local={true} format={`LLL`} interval={30000}/>
                    </span>
                    <ul className={isOpenMenu ? `${scss.booked}` : `${scss.booked} ${scss.hide}`}>
                        {
                            roomsTimeSort.map((value) =>
                                <BookedRoom key={value.answer.room} room={value}/>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export {SideBar};
