import {FC, useEffect} from 'react'

// styles
import cn from 'classnames'
import css from './timeline.module.scss'

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {roomActions} from "../../../store";

const Timeline: FC = () => {
    const {soonestBookings} = useAppSelector(state => state.rooms);

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
                    {/*{soonestBookings && soonestBookings.soonestBookings.map(booking =>*/}
                    {/*<details className={css.timeline__details}>*/}
                    {/*    <summary className={css.timeline__summary}>Name : {booking.name}</summary>*/}
                    {/*    <ul>*/}
                    {/*        <li>Start: {booking.start}</li>*/}
                    {/*        <li>End: {booking.end}</li>*/}
                    {/*        <li>Description: {booking.description}</li>*/}
                    {/*        <ul>*/}
                    {/*        {booking.users.map(user =>*/}
                    {/*        <li>User: {user.firstName} {user.lastName} {user.email}</li>*/}
                    {/*        )}*/}
                    {/*        </ul>*/}
                    {/*    </ul>*/}
                    {/*</details>*/}
                    {/*)}*/}
                    <details className={css.timeline__details}>
                        <summary className={css.timeline__summary}>Event 1</summary>
                        <div>
                            <p className={css.timeline__description}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dicta!
                            </p>
                        </div>
                    </details>
                </li>
            </ul>
        </div>
    )
}

export {Timeline}
