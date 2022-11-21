import { FC, PropsWithChildren, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { userService } from 'services';
import { getMe } from 'store';
import { selectUser } from 'store/slices';

import { useAppDispatch, useAppSelector} from 'hooks';

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const { user } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userService.isLoggedIn() && !user) {
      dispatch(getMe());
    }
  }, [dispatch]);

  if (!userService.isLoggedIn()) {
    // NotifyService.error('Please login');
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export { ProtectedRoute };
