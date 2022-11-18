import {FC, PropsWithChildren, useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import {isLoggedIn, NotifyService} from 'services';
import {authActions, getMe, selectUser} from 'store';
import {useAppDispatch, useAppSelector} from '../hooks';

const ProtectedRoute: FC<PropsWithChildren> = ({children}) => {
    const {user} = useAppSelector(selectUser);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isLoggedIn() && !user) {
            dispatch(authActions.getMe());
        }
    }, [dispatch]);

    // if (!isLoggedIn()) {
    //   // NotifyService.error('Please login');
    //   return <Navigate to="/login" />;
    // }

    return <>{children}</>;
};

export {ProtectedRoute};
