import {FC, useEffect, useRef} from 'react'
import ReactToPrint from 'react-to-print'

// styles
import cn from 'classnames'
import css from './timeline.module.scss'

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {roomActions} from "../../../store";
import {print} from '../../../assets/images/icons'

const Timeline: FC = () => {
    const {soonestBookings} = useAppSelector(state => state.rooms);
    const componentRef = useRef(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(roomActions.getAllSoonestBookings({roomId: 2, soonestBookingsDays: 7}))
    }, [dispatch]);

    return (
        <div className={cn(css.timeline)} ref={componentRef}>
            {/*<div className={cn(css.timeline__header)}>*/}
                <div className={cn(css.timeline__title)}>
                    Soonest Bookings
                </div>
                <ReactToPrint trigger={() => {
                    return (
                        <div className={cn(css.timeline__print)}>
                            <img src={print} alt="print" height={15} width={15}/>
                        </div>)
                }}
                              content={() => componentRef.current}
                />
            {/*</div>*/}
            <ul className={cn(css.timeline__items)}>
                <li className={cn(css.timeline__item)}>
                    {soonestBookings && soonestBookings.soonestBookings.map(booking =>
                        <div className={cn(css.timeline__wrapper)}>
                            <div className={cn(css.timeline__time_wrapper)}>
                                <div className={cn(css.timeline__time)}>
                                    {booking.start.substring(0, 16).replace('T', ' ')}
                                </div>
                                <div className={cn(css.timeline__time)}>
                                    {booking.end.substring(0, 16).replace('T', ' ')}
                                </div>
                            </div>
                            <div className={cn(css.timeline__details)}>
                                <ul>
                                    <li>Name: {booking.name}</li>
                                    <li>Description: {booking.description}</li>
                                    <ul className={cn(css.timeline__users)}>
                                        Users:
                                        {booking.users.map(user =>
                                            <li> {user.email}</li>
                                        )}
                                    </ul>
                                </ul>
                            </div>
                        </div>
                    )}
                </li>
            </ul>
        </div>
    )
}

export {Timeline}
