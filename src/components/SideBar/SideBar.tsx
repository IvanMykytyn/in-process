import {FC} from 'react';

// styles
import cn from 'classnames';
import scss from './sidebar.module.scss';
import {setting, search, user} from '../../assets/images/icons';

import {Input} from '../index'


const SideBar = () => {
    return (
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
                    <button className={cn(scss.info__userImg)}>
                        <img src={user} alt="user" height={30} width={30}/>
                    </button>
                </li>
            </ul>
            <div className={cn(scss.input)}>
            <Input fullWidth={true}/>
            </div>
            <ul className={cn(scss.booked)}>
                <li className={cn(scss.booked__item)}>

                </li>
            </ul>
            {/*<ul className={cn(scss.bookmarks)}>*/}
            {/*    <li className={cn(scss.bookmarks__item)}>*/}
            {/*        <button className={cn(scss.bookmarks__btn)}*/}
            {/*                type={'button'}>*/}
            {/*            Open*/}
            {/*        </button>*/}
            {/*    </li>*/}
            {/*    <li className={cn(scss.bookmarks__item)}>*/}
            {/*        <button className={cn(scss.bookmarks__btn)}*/}
            {/*                type={'button'}>*/}
            {/*            Open*/}
            {/*        </button>*/}
            {/*    </li>*/}
            {/*    <li className={cn(scss.bookmarks__item)}>*/}
            {/*        <button className={cn(scss.bookmarks__btn)}*/}
            {/*                type={'button'}>*/}
            {/*            Open*/}
            {/*        </button>*/}
            {/*    </li>*/}
            {/*    <li className={cn(scss.bookmarks__item)}>*/}
            {/*        <button className={cn(scss.bookmarks__btn)}*/}
            {/*                type={'button'}>*/}
            {/*            Open*/}
            {/*        </button>*/}
            {/*    </li>*/}
            {/*</ul>*/}
        </div>
    );
};

export {SideBar};