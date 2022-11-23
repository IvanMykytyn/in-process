import React, { FC, useState } from 'react';

import { SectionLayout } from './SectionLayout';

// styles
import cn from 'classnames';
import scss from './settings.module.scss';
import { Toggle } from 'components';

const GeneralSettingsSection: FC = () => {
  return (
    <SectionLayout headerText={'General Settings'}>
      <div className={cn(scss['section-general-settings'])}>
        <ul className={scss['general-options']}>
          <li className={scss['general-option']}>
            <p>some Text</p>
            <div>
              <Toggle checked={false} handleToggle={() => {}} />
            </div>
          </li>
        </ul>
      </div>
    </SectionLayout>
  );
};

export { GeneralSettingsSection };
