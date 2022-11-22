import {FC, useEffect} from 'react';

import {PersonalInformationSection} from './PersonalInformationSection';
import {ChangePasswordSection} from './ChangePasswordSection';

import {selectTheme, selectUser, setNewTheme} from 'store';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {UserInterface} from 'models';

// styles
import scss from './settings.module.scss';
import {UsersManagementSection} from './UsersManagementSection';
import useLocalStorage from "use-local-storage";

const Settings: FC = () => {
    const {user} = useAppSelector(selectUser);
    const {role} = user || ({} as UserInterface);

    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light', 'theme');
    const {newTheme} = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();

    const toggleTheme = () => {
        const currentTheme = theme === 'light' ? 'dark' : 'light';
        dispatch(setNewTheme(currentTheme));
        setTheme(currentTheme);
    };

    return (
        <div className={scss.settings}>
            <div className={scss.settings__top}>
                <h1 className={scss['settings__header']}>Account Settings</h1>
                <button onClick={toggleTheme}>
                    Dark Mode:{theme === 'light' ? 'ON' : 'OFF'}
                </button>
            </div>
            <PersonalInformationSection/>
            <ChangePasswordSection/>
            {role === 'admin' && <UsersManagementSection/>}
        </div>
    );
};

export {Settings};
