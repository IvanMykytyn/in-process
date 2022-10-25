// React Router dom
import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { userService } from 'services';
import { selectUser, useAppSelector } from 'store';

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  // const { user } = useAppSelector(selectUser);
  const { user } = { user: true };

  // if (!userService.isLoggedIn() || !user) {
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export { ProtectedRoute };
