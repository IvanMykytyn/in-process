import React, { FC, PropsWithChildren } from 'react';

// styles
import scss from './settings.module.scss';

interface SectionProps extends PropsWithChildren {
  headerText: string;
}

const SectionLayout: FC<SectionProps> = ({ headerText, children }) => {
  return (
    <section className={scss['settings__section']}>
      <header className={scss['settings__section-header']}>
        <hr className={scss['settings__section-header-hr']}/>
        <h2>{headerText}</h2>
      </header>
        <>{children}</>
    </section>
  );
};

export { SectionLayout };
