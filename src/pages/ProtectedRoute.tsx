// React Router dom
import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from 'services';
import { selectUser, useAppSelector } from 'store';

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const { user } = useAppSelector(selectUser);

  if (!isLoggedIn() || !user) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export { ProtectedRoute };
