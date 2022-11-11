import { FC, PropsWithChildren, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { isLoggedIn, NotifyService } from 'services';
import { selectUser, useAppSelector } from 'store';

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const { user } = useAppSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate('/login');
      NotifyService.error('Please login again');
    }
  }, [navigate, user]);

  if (!isLoggedIn()) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export { ProtectedRoute };
