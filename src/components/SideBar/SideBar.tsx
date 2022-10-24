import 'moment/locale/uk';
import {FC, useState} from 'react';
import {Link} from 'react-router-dom';
import {Accordion} from '@mui/material';
import moment from 'moment';

// styles
import cn from 'classnames';
import scss from './sidebar.module.scss';


import {Input} from '../index'
import {setting, search, user, clock} from '../../assets/images/icons';
import {BookedRoom} from 'components/BookedRoom/BookedRoom';

export interface Data {
    roomId: string;
    answer: {
        date: string;
        time: {
            hours: number,
            minuts: number
        };
        room: string;
        instruments: string[];
    };
}

const data: Data[] = [
    {
        roomId: 'room 1',
        answer: {
            date: '2022-10-30',
            time: {
                hours: 18,
                minuts: 30
            },
            room: '1',
            instruments: ['0', '1', '2']
        }
    },
    {
        roomId: 'room 2',
        answer: {
            date: '2022-10-29',
            time: {
                hours: 18,
                minuts: 30
            },
            room: '2',
            instruments: ['0', '1']
        }
    },
    {
        roomId: 'room 3',
        answer: {
            date: '2022-10-27',
            time: {
                hours: 18,
                minuts: 30
            },
            room: '3',
            instruments: ['1']
        }
    }, {
        roomId: 'room 4',
        answer: {
            date: '2022-10-29',
            time: {
                hours: 18,
                minuts: 30
            },
            room: '4',
            instruments: ['0', '1', '2']
        }
    },
    {
        roomId: 'room 5',
        answer: {
            date: '2022-10-25',
            time: {
                hours: 20,
                minuts: 30
            },
            room: '5',
            instruments: ['0', '2']
        }
    },
    {
        roomId: 'room 6',
        answer: {
            date: '2022-10-25',
            time: {
                hours: 20,
                minuts: 30
            },
            room: '6',
            instruments: ['0', '1']
        }
    },
    {
        roomId: 'room 7',
        answer: {
            date: '2022-10-31',
            time: {
                hours: 11,
                minuts: 30
            },
            room: '7',
            instruments: ['0', '2']
        }
    },
];

const SideBar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(true);
    const [selected, setSelected] = useState<number | null>(null);

    const isOpened = () => {
        setIsOpenMenu(!isOpenMenu);
    };
    //TO DO MOMENT.js
    const mainClock = moment().format('LT');

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
                <div className={isOpenMenu ? `${scss.input}` : `${scss.input} ${scss.hide}`}>
                    <span className={scss.line}>
                        line
                    </span>
                    <Input fullWidth={true} label={'Search...'}/>
                    <span className={scss.line}>
                        line
                    </span>
                </div>
                <div className={scss.inner}>
                    <span className={scss.clock}>
                        <img src={clock} alt="clock" width={15} height={15}/>
                        {mainClock}
                        <img src={clock} alt="clock" width={15} height={15}/>
                    </span>
                    <ul className={isOpenMenu ? `${scss.booked}` : `${scss.booked} ${scss.hide}`}>
                        {
                            data && data.map((room, index) =>
                                <BookedRoom key={index} room={room}/>
                            )
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export {SideBar};
