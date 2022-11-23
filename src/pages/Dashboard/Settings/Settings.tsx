import { FC, useEffect } from 'react';

import { PersonalInformationSection } from './PersonalInformationSection';
import { ChangePasswordSection } from './ChangePasswordSection';

import { getMe, selectTheme, selectUser, setNewTheme } from 'store';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { UserInterface } from 'models';

// styles
import scss from './settings.module.scss';
import { UsersManagementSection } from './UsersManagementSection';
import useLocalStorage from 'use-local-storage';
import { GeneralSettingsSection } from './GeneralSettingsSection';
import { Checkbox } from 'components';
import { adminService } from 'services';

const Settings: FC = () => {
  const { user } = useAppSelector(selectUser);
  const { role,isHidden } = user || ({} as UserInterface);

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light', 'theme');
  const { newTheme } = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const toggleTheme = () => {
    const currentTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(setNewTheme(currentTheme));
    setTheme(currentTheme);
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

          <button onClick={toggleTheme}>
            Dark Mode:{theme === 'light' ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>
      <PersonalInformationSection />
      <ChangePasswordSection />
      {/* <GeneralSettingsSection /> */}
      {role === 'admin' && <UsersManagementSection />}
    </div>
  );
};

export { Settings };
