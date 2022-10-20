// React Router dom
import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'store';
import { selectUser } from 'store/features';

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const { user } = useAppSelector(selectUser);

  if (!user) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export { ProtectedRoute };
