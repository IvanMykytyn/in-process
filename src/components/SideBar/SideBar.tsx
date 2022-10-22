import {FC} from 'react';

// styles
import cn from 'classnames';
import scss from './sidebar.module.scss';
import {setting, search, user} from '../../assets/images/icons';

import {Input} from '../index'
import {Link} from 'react-router-dom';
import { logoutUser } from 'store';
import { useAppDispatch } from 'store';


const SideBar = () => {
    const dispatch = useAppDispatch()
    return (
        <div className={cn(scss.inner)}>
            <ul className={cn(scss.bookmarks)}>
                <li className={cn(scss.bookmarks__item)}>
                    <button className={cn(scss.bookmarks__btn)}
                            type={'button'}>
                        <Link to={'/dashboard/calendar'}>
                            Calendar
                        </Link>
                    </button>
                </li>
                <li className={cn(scss.bookmarks__item)}>
                    <button className={cn(scss.bookmarks__btn)}
                            type={'button'}>
                        <Link to={'/dashboard/timeline'}>
                            Timeline
                        </Link>
                    </button>
                </li>
                <li className={cn(scss.bookmarks__item)}>
                    <button className={cn(scss.bookmarks__btn)}
                            type={'button'}>
                        <Link to={'/dashboard/map'}>
                            Map
                        </Link>
                    </button>
                </li>
                <li className={cn(scss.bookmarks__item)}>
                    <button className={cn(scss.bookmarks__btn)}
                            type={'button'}>
                        <Link to={'/dashboard/settings'}>
                            Settings
                        </Link>
                    </button>
                </li>
            </ul>
            <div className={cn(scss.sidebar)}>
                <div className={cn(scss.wrapper)}>
                    <ul className={cn(scss.info)}>
                        <li>
                            <button className={cn(scss.info__settings)}>
                                <img src={setting} alt="setting" height={30} width={30}/>
                            </button>
                        </li>
                        <li>
                            <button className={cn(scss.info__userName)}>
                                User Name
                            </button>
                        </li>
                        <li>
                            <button className={cn(scss.info__userImg)} onClick={() => dispatch(logoutUser())}>
                                <img src={user} alt="user" height={30} width={30}/>
                            </button>
                        </li>
                    </ul>
                    <div className={cn(scss.input)}>
                        <Input fullWidth={true} label={'Search...'}/>
                    </div>
                    <ul className={cn(scss.booked)}>
                        <li className={cn(scss.booked__item)}>
                            room 1
                        </li>
                        <li className={cn(scss.booked__item)}>
                            room 2
                        </li>
                        <li className={cn(scss.booked__item)}>
                            room 3
                        </li>
                        <li className={cn(scss.booked__item)}>
                            room 4
                        </li>
                        <li className={cn(scss.booked__item)}>
                            room 5
                        </li>
                        <li className={cn(scss.booked__item)}>
                            room 6
                        </li>
                        <li className={cn(scss.booked__item)}>
                            room 7
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export {SideBar};
