import { FC, PropsWithChildren, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { userService } from 'services';
import { getMe } from 'store';
import { roomActions, selectRooms, selectUser } from 'store/slices';

import { useAppDispatch, useAppSelector} from 'hooks';

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const { rooms } = useAppSelector(selectRooms);
  const { user } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userService.isLoggedIn() && !user) {
      dispatch(getMe());
    }
  }, [dispatch]);

  useEffect(() => {
    if (rooms.length === 0) {
      dispatch(roomActions.getAllRooms({ officeId: 2 }));
    }
    // eslint-disable-next-line
  }, [dispatch]);

  if (!userService.isLoggedIn()) {
    // NotifyService.error('Please login');
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export { ProtectedRoute };
