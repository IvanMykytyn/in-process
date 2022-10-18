import { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

// styles
import cn from 'classnames';
import css from './forgot-password.module.scss';

// icons
import { keyIcon, arrowLeft } from 'assets/images/icons';

interface CustomForgotPasswordProps {
  header: string;
  description: string;
}

const ForgotPasswordLayout: FC<PropsWithChildren & CustomForgotPasswordProps> = ({
  children,
  header,
  description,
}) => {
  return (
    <div className={css.container}>
      <div className={css['forgot-password']}>
        <div className={css['forgot-password__container']}>
          <span className={css['forgot-password__icon']}>
            <span className={css['forgot-password__icon-inner']}>
              <img src={keyIcon} alt="logo" />
            </span>
          </span>

          <h2 className={css['forgot-password__header']}>{header}</h2>
          <p className={css['forgot-password__description']}>{description}</p>

          <>{children}</>

          <div className={css['forgot-password__go-back']}>
            <Link to={'/login'} className={css['forgot-password__go-back-link']}>
              <img src={arrowLeft} alt={'arrowLeft'} />
              <p>Back to Login</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ForgotPasswordLayout };
