import 'moment/locale/uk';
import React, {FC, useEffect, useState} from 'react';
import Moment from 'react-moment';

// styles
import cn from 'classnames';
import scss from './sidebar.module.scss';

import {clock} from '../../assets/images/icons';
import {BookedRoom} from 'components/BookedRoom/BookedRoom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {bookingActions, selectBooking, toggleSideBar} from 'store/slices/booking.slice';
import {SideBarHeader} from './SideBarHeader';

import {arrowLeft, arrowRight} from '../../assets/images/icons';

const SideBar: FC = () => {
    const [pageNumber, setPageNumber] = useState<number>(1);
    const {isSideBarOpen, bookingsOwn} = useAppSelector(selectBooking);
    const dispatch = useAppDispatch();

    const getTotalCountOfPages = bookingsOwn && Math.ceil(bookingsOwn.totalCount / 10);

    const handleClick = () => {
        dispatch(toggleSideBar());
    };

    const getPageNumber = (id: string) => {
        if (id === '+' && typeof getTotalCountOfPages === 'number' && pageNumber < getTotalCountOfPages) {
            setPageNumber(pageNumber + 1);
        } else if (id === '-' && pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    }

    useEffect(() => {
        dispatch(bookingActions.getAllOwnBookings({page: pageNumber, limit: 10}))
    }, [dispatch, pageNumber])

    return (
        <div className={isSideBarOpen ? `${scss.sidebar}` : `${scss.sidebar} ${scss.hide}`}>
            <div className={cn(scss.wrapper)}>
                <SideBarHeader/>
                <button className={cn(scss.burger)} onClick={handleClick}>
                    Menu
                </button>
            </div>
            <div className={scss.inner}>
                    <span className={isSideBarOpen ? `${scss.clock}` : `${scss.clock} ${scss.hide}`}>
                        <img src={clock} alt="clock" width={15} height={15} color={'red'}/>
                        <Moment locale={'uk'} local={true} format={`LLL`} interval={30000}/>
                    </span>
                <ul className={isSideBarOpen ? `${scss.booked}` : `${scss.booked} ${scss.hide}`}>
                    {
                        bookingsOwn ?
                            bookingsOwn && bookingsOwn.data.map((value) =>
                                <BookedRoom key={value.id}
                                            room={value.room}
                                            creator={value.creator}
                                            members={value.users}
                                            endDate={value.end}
                                            startDate={value.start}
                                />
                            )
                            :
                            <h3 className={scss.null}>
                                You don't have any meetings added yet
                            </h3>
                    }
                </ul>
            </div>
            <div className={scss.sidebar__buttons}>
                <button
                    className={isSideBarOpen ?
                        typeof getTotalCountOfPages === 'number' && pageNumber === 1 ? `${scss.sidebar__button} ${scss.disabled}` : `${scss.sidebar__button}`
                        :
                        `${scss.sidebar__button} ${scss.hide}`
                    }
                    onClick={() => getPageNumber('-')} disabled={pageNumber === 0}>
                    <img src={arrowLeft} alt={"arrow left"} height={10} width={10}/>
                </button>
                <button
                    className={
                        isSideBarOpen ?
                            pageNumber === getTotalCountOfPages ? `${scss.sidebar__button} ${scss.disabled}` : `${scss.sidebar__button}`
                            :
                            `${scss.sidebar__button} ${scss.hide}`
                    }
                    onClick={() => getPageNumber('+')} disabled={pageNumber === getTotalCountOfPages}>
                    <img src={arrowRight} alt={"arrow right"} height={10} width={10}/>
                </button>
            </div>
        </div>
    )
};

export {SideBar};
