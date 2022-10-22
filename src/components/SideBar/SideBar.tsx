import {FC, useState} from 'react';

// styles
import cn from 'classnames';
import scss from './sidebar.module.scss';
import {setting, search, user} from '../../assets/images/icons';

import {Input} from '../index'
import {Link} from 'react-router-dom';

import {Accordion} from '@mui/material';

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
            date: '21.12.2022',
            time: '18:30',
            room: '1',
            staff: 'board, TV, markers'
        }
    },
    {
        room: 'room 2',
        answer: {
            date: '28.10.2022',
            time: '18:30',
            room: '2',
            staff: 'board, TV, markers'
        }
    },
    {
        room: 'room 3',
        answer: {
            date: '21.10.2022',
            time: '18:30',
            room: '3',
            staff: 'board, TV, markers'
        }
    }, {
        room: 'room 3',
        answer: {
            date: '21.10.2022',
            time: '18:30',
            room: '3',
            staff: 'board, TV, markers'
        }
    }, {
        room: 'room 3',
        answer: {
            date: '21.10.2022',
            time: '18:30',
            room: '3',
            staff: 'board, TV, markers'
        }
    }, {
        room: 'room 3',
        answer: {
            date: '21.10.2022',
            time: '18:30',
            room: '3',
            staff: 'board, TV, markers'
        }
    },
    {
        room: 'room 4',
        answer: {
            date: '21.10.2022',
            time: '18:30',
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

    const toggle = (i: number) => {
        if (selected === i) {
            return setSelected(null);
        }
        return setSelected(i);
    };

    return (
        <div className={isOpenMenu ? `${scss.sidebar}` : `${scss.sidebar} ${scss.hide}`}>
            <div className={cn(scss.wrapper)}>
                <button className={scss.burger} onClick={isOpened}>
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
                                <li className={cn(scss.booked__wrapper)}>
                                    {room.room}
                                    <span className={selected === index ? cn(scss.active) : cn(scss.booked__arrow)}
                                          onClick={() => toggle(index)}>
                                        +
                                    </span>
                                </li>
                                <ul className={selected === index ? `${scss.booked__list} ${scss.show}` : `${scss.booked__list}`}>
                                    <li className={cn(scss.booked__info)}>
                                        Date: {room.answer.date}
                                    </li>
                                    <li className={cn(scss.booked__info)}>
                                        Time: {room.answer.time}
                                    </li>
                                    <li className={cn(scss.booked__info)}>
                                        Room: {room.answer.room}
                                    </li>
                                    <li className={cn(scss.booked__info)}>
                                        Staff: {room.answer.staff}
                                    </li>
                                </ul>
                            </li>
                        )
                    }

                </ul>
            </div>
        </div>
    );
};

export {SideBar};
