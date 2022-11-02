import React, { FC, PropsWithChildren } from 'react';

// styles
import scss from './settings.module.scss';

interface SectionProps extends PropsWithChildren {
  headerText: string;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

const SectionLayout: FC<SectionProps> = ({ headerText, onSubmit, children }) => {
  return (
    <section className={scss['settings__section']}>
      <header className={scss['settings__section-header']}>
        <hr className={scss['settings__section-header-hr']}/>
        <h2>{headerText}</h2>
      </header>
      <form className={scss['settings__section-body']} onSubmit={onSubmit}>
        <>{children}</>
      </form>
    </section>
  );
};

export { SectionLayout };
