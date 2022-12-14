import {FC} from 'react';

import {PersonalInformationSection} from './PersonalInformationSection';
import {ChangePasswordSection} from './ChangePasswordSection';

import {getMe, selectTheme, selectUser, setNewTheme} from 'store';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {UserInterface} from 'models';

// styles
import scss from './settings.module.scss';
import {sun, moon} from '../../../assets/images/icons';

import {UsersManagementSection} from './UsersManagementSection';
import {Checkbox} from 'components';
import {adminService} from 'services';

const Settings: FC = () => {
    const {user} = useAppSelector(selectUser);
    const {role, isHidden} = user || ({} as UserInterface);

    const {mode} = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();

    const toggleTheme = () => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        dispatch(setNewTheme(newMode));
    };

    const handleIsHiddenToggle = async () => {
        await adminService.switchHiddenStatus();
        dispatch(getMe());
    };

    return (
        <div className={scss.settings}>
            <div className={scss.settings__top}>
                <h1 className={scss['settings__header']}>Account Settings</h1>
                <div className={scss['toggle__container']}>
                    {role === 'admin' && (
                        <div className={scss['toggle-hidden']}>
                            <p>Hide Me For Others</p>
                            <div>
                                <Checkbox
                                    circled
                                    checked={isHidden}
                                    onChange={handleIsHiddenToggle}
                                />
                            </div>
                        </div>
                    )}
                    <button className={scss.settings__theme} onClick={toggleTheme}>
                        <img src={mode === 'light' ? sun : moon} alt="change theme" height={15} width={15}/>
                    </button>
                </div>
            </div>
            <PersonalInformationSection/>
            <ChangePasswordSection/>
            {/* <GeneralSettingsSection /> */}
            {role === 'admin' && <UsersManagementSection/>}
        </div>
    );
};

export {Settings};
