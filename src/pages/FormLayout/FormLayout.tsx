import { FC, PropsWithChildren, CSSProperties } from 'react';

// styles
import cn from 'classnames';
import css from './form-layout.module.scss';

interface CustomForgotPasswordProps {
  header: string;
  icon: string;
  dataTestid?: string;
  description?: string;
  iconStyles?: CSSProperties;
}

const FormLayout: FC<PropsWithChildren & CustomForgotPasswordProps> = ({
  children,
  header,
  icon,
  iconStyles,
  dataTestid,
  description,
}) => {
  return (
    <div data-testid={dataTestid} className={css.container}>
      <div className={css['form-layout']}>
        <div className={css['form-layout__wrapper']}>
          <span className={css['form-layout__icon-wrapper']}>
            <img
              className={css['form-layout__icon']}
              src={icon}
              alt="login"
              style={iconStyles}
            />
          </span>

          <h2 className={css['form-layout__title']}>{header}</h2>

          {description && (
            <p className={css['form-layout__description']}>{description}</p>
          )}

          <>{children}</>
        </div>
      </div>
    </div>
  );
};

export { FormLayout };
