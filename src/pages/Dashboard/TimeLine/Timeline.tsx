import {FC, useEffect} from 'react'

// styles
import cn from 'classnames'
import css from './timeline.module.scss'

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {roomActions} from "../../../store";

const Timeline: FC = () => {
    const {soonestBookings} = useAppSelector(state => state.rooms);
    console.log(soonestBookings);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(roomActions.getAllSoonestBookings({roomId: 2, soonestBookingsDays: 7}))
    }, [dispatch]);

    return (
        <div className={css.timeline}>
            <h3 className={css.timeline__title}>
                Soonest Bookings
            </h3>
            <ul className={css.timeline__items}>
                <li className={css.timeline__item}>
                    {soonestBookings && soonestBookings.map(room => room.soonestBookings.map( booking =>
                        <details className={css.timeline__details}>
                            <summary className={css.timeline__summary}>{booking.name}</summary>
                            <div>
                                <ul className={css.timeline__description}>
                                    <li>{booking.start}</li>
                                    <li>{booking.end}</li>
                                    <li>{booking.description}</li>
                                    {booking.users.map(user =>
                                        <li>{user.firstName} {user.lastName} {user.email}</li>
                                    )}
                                </ul>
                            </div>
                        </details>
                    ))}
                </li>
            </ul>
        </div>
    )
}

export {Timeline}
