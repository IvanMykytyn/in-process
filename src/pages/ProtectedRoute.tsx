import { FC, PropsWithChildren, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn, NotifyService } from 'services';
import { getMe, selectUser, useAppDispatch, useAppSelector } from 'store';

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const { user } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  //
  // useEffect(() => {
  //   if (isLoggedIn() && !user) {
  //     dispatch(getMe());
  //   }
  // }, [dispatch]);
  //
  // if (!isLoggedIn()) {
  //   // NotifyService.error('Please login');
  //   return <Navigate to="/login" />;
  // }

  return <>{children}</>;
};

export { ProtectedRoute };
