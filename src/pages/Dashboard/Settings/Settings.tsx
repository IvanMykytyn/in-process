import { FC } from 'react';

import { PersonalInformationSection } from './PersonalInformationSection';
import { ChangePasswordSection } from './ChangePasswordSection';

import { selectUser, useAppSelector } from 'store';
import { User } from 'models';

// styles
import scss from './settings.module.scss';
import { UsersManagementSection } from './UsersManagementSection';

const Settings: FC = () => {
  const { user } = useAppSelector(selectUser);
  const { role } = user || ({} as User);

  return (
    <div className={scss.settings}>
      <h1 className={scss['settings__header']}>Account Settings</h1>
      <PersonalInformationSection />
      <ChangePasswordSection />
      {role === 'admin' && <UsersManagementSection />}
    </div>
  );
};

export { Settings };
