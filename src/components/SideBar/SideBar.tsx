import 'moment/locale/uk';
import {FC, useEffect} from 'react';
import moment from 'moment';
import Moment from 'react-moment';

// styles
import cn from 'classnames';
import scss from './sidebar.module.scss';

import {Input} from '../index';
import {clock} from '../../assets/images/icons';
import {BookedRoom} from 'components/BookedRoom/BookedRoom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {bookingActions, selectBooking, toggleSideBar} from 'store/slices/booking.slice';
import {SideBarHeader} from './SideBarHeader';

const SideBar: FC = () => {
    const {isSideBarOpen, bookingsOwn} = useAppSelector(selectBooking);
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(toggleSideBar());
    };

    useEffect(() => {
        dispatch(bookingActions.getAllOwnBookings({page: 3, limit: 10}))
    }, [dispatch])


    return (

        <div className={isSideBarOpen ? `${scss.sidebar}` : `${scss.sidebar} ${scss.hide}`}>
            <div className={cn(scss.wrapper)}>
                <SideBarHeader/>
                <button className={cn(scss.burger)} onClick={handleClick}>
                    Menu
                </button>

                <div className={scss.inner}>
                    <span className={isSideBarOpen ? `${scss.clock}` : `${scss.clock} ${scss.hide}`}>
                        <img src={clock} alt="clock" width={15} height={15} color={'red'}/>
                        <Moment locale={'uk'} local={true} format={`LLL`} interval={30000}/>
                    </span>
                    <ul className={isSideBarOpen ? `${scss.booked}` : `${scss.booked} ${scss.hide}`}>
                        {
                            bookingsOwn && bookingsOwn.data.map((value) =>
                                <BookedRoom key={value.id} room={value.room} endDate={value.end}/>

                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
};

export {SideBar};
