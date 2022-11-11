import {DetailedHTMLProps, FC, HTMLAttributes} from "react";
import moment from 'moment';

import css from './BookedRoom.module.scss';
import {clock, calendar, staffIcon, board, tv, marker} from '../../assets/images/icons';

import {Data} from "components/SideBar/SideBar";
import {tools} from '../../utils/tools'
import Moment from "react-moment";

interface Props {
    room: Data;
}

const BookedRoom: FC<Props> = ({room: {roomId, answer: {date, room, time, instruments}}}) => {

    const getCurrentDateTime = moment();
    const getRoomDateTime = moment(`${date} ${time.hours}:${time.minuts}:00`);

    const milliseconds = getRoomDateTime.diff(getCurrentDateTime, 'millisecond');

    return (
        <ul className={milliseconds > 0 ?
            `${css.booked__item}`
            :
            `${css.booked__item} ${css.glowing}`
        }>
            <li className={css.booked__info}>
                <div>
                    Room {room}
                </div>
            </li>
            <ul className={css.booked__time}>
                <li className={css.booked__info}>
                    <img src={calendar} alt="Data" height={15} width={15}/>
                    <span>
                        {date}
                    </span>
                </li>
                <li className={css.booked__info}>
                    <img src={clock} alt={"Time"} height={15} width={15}/>
                    {
                        milliseconds >= 0 ?
                            <Moment fromNow ago interval={15000}>
                                {getRoomDateTime}
                            </Moment>
                            :
                            "It's on now"
                    }
                </li>
            </ul>
        </ul>
    );
};

export {BookedRoom};