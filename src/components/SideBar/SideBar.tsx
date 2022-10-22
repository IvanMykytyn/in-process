import {FC, useState} from 'react';
import moment from 'moment';

// styles
import cn from 'classnames';
import scss from './sidebar.module.scss';
import {Accordion} from '@mui/material';

import {setting, search, user, clock, calendar} from '../../assets/images/icons';
import {Input} from '../index'

import {Link} from 'react-router-dom';

interface Data {
    room: string;
    answer: {
        date: string;
        time: string;
        room: string;
        staff: string;
    };
}

const data: Data[] = [
    {
        room: 'room 1',
        answer: {
            date: '2022-10-25',
            time: '18:30:00',
            room: '1',
            staff: 'board, TV, markers'
        }
    },
    {
        room: 'room 2',
        answer: {
            date: '2022-10-25',
            time: '18:30:00',
            room: '2',
            staff: 'board, TV, markers'
        }
    },
    {
        room: 'room 3',
        answer: {
            date: '2022-10-25',
            time: '18:30:00',
            room: '3',
            staff: 'board, TV, markers'
        }
    }, {
        room: 'room 3',
        answer: {
            date: '2022-10-25',
            time: '18:30:00',
            room: '3',
            staff: 'board, TV, markers'
        }
    }, {
        room: 'room 4',
        answer: {
            date: '2022-10-25',
            time: '18:30:00',
            room: '3',
            staff: 'board, TV, markers'
        }
    }, {
        room: 'room 5',
        answer: {
            date: '2022-10-25',
            time: '18:30:00',
            room: '3',
            staff: 'board, TV, markers'
        }
    },
    {
        room: 'room 6',
        answer: {
            date: '2022-10-25',
            time: '18:30:00',
            room: '4',
            staff: 'board, TV, markers'
        }
    }
];

const SideBar = () => {

    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
    const [selected, setSelected] = useState<number | null>(null);

    const isOpened = () => {
        setIsOpenMenu(!isOpenMenu);
    };
    //TO DO MOMENT.js

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
                    <Input fullWidth={true} label={'Search...'}/>
                </div>
                <ul className={isOpenMenu ? `${scss.booked}` : `${scss.booked} ${scss.hide}`}>
                    {
                        data && data.map((room, index) =>
                            <li className={cn(scss.booked__item)} key={index}>
                                <li className={cn(scss.booked__info)}>
                                    <div>
                                        Room {room.answer.room}
                                    </div>
                                    <div className={cn(scss.booked__time)}>
                                        {moment('2022-10-25 18:30:00').fromNow()}
                                    </div>
                                </li>
                                <div className={cn(scss.booked__time)}>
                                    <li className={cn(scss.booked__info)}>
                                        <img src={calendar} alt="Data" height={15} width={15}/>: {room.answer.date}
                                    </li>
                                    <li className={cn(scss.booked__info)}>
                                        <img src={clock} alt="Time" height={15} width={15}/>: {room.answer.time}
                                    </li>
                                </div>

                            </li>
                        )
                    }

                </ul>
            </div>
        </div>
    );
};

export {SideBar};
