import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from 'services';

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  if (!isLoggedIn()) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export { ProtectedRoute };
