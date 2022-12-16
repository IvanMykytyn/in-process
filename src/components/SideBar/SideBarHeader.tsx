import React, { FC } from 'react';

// styles
import cn from 'classnames';
import scss from './sidebar.module.scss';
import { logoutUser, roomActions, selectUser } from 'store';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectBooking } from 'store/slices/booking.slice';
import { Link, useNavigate } from 'react-router-dom';
import { logout, setting } from 'assets/images/icons';
import { UserInterface } from 'models';
import { getFullName, getInitials } from 'utils';

interface SideBarHeaderProps {}

const SideBarHeader: FC<SideBarHeaderProps> = (props) => {
  const { isSideBarOpen } = useAppSelector(selectBooking);
  const { user } = useAppSelector(selectUser);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { firstName, lastName, email, avatar_url } = user || ({} as UserInterface);
  const fullName = getFullName(firstName, lastName);

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(roomActions.clearRooms())
    navigate('/login');
  };

  return (
    <header className={isSideBarOpen ? `${scss.info}` : `${scss.info} ${scss.hide}`}>
      <div className={cn(scss['user-information'])}>
        <div role="img" className={cn(scss['initials-avatar'])}>
          {avatar_url ? (
            <img src={avatar_url} alt={'avatar'} />
          ) : (
            <div>{getInitials(firstName, lastName)}</div>
          )}
        </div>
        <Link to={'/dashboard/settings'}>
          <div>
            <h4 className={cn(scss.info__userName)}>{fullName ?? ''}</h4>
            <p className={cn(scss.info__email)}>{email ?? ''}</p>
          </div>
        </Link>
      </div>
      <div className={cn(scss.icons)}>
        <Link to={'/dashboard/settings'} className={cn(scss.info__settings)}>
          <div className={cn(scss.info__svg)}>
            <img src={setting} alt="setting-icon" />
          </div>
        </Link>
        <button className={cn(scss['logout-btn'])} onClick={handleLogout}>
          <div className={cn(scss.info__svg)}>
            <img src={logout} alt="logout-icon" />
          </div>
        </button>
      </div>
    </header>
  );
};

export { SideBarHeader };
