import React, {FC} from "react";
import Moment from "react-moment";
import moment from 'moment';

import css from './BookedRoom.module.scss';

import {clock, calendar} from '../../assets/images/icons';
import {IRooms, IUserOwn} from '../../models'
import {staff} from '../../utils/tools/staff';

interface Props {
    room: IRooms;
    endDate: string;
    startDate: string;
    creator: IUserOwn;
    members: IUserOwn[];
    meetingName: string;
    isActive: boolean;
}

const BookedRoom: FC<Props> = ({
                                   room: {id, name, floor, maxCapacity, equipments},
                                   endDate,
                                   startDate,
                                   creator: {email},
                                   members,
                                   meetingName,
                                   isActive
                               }) => {


    const getCurrentDateTime = moment();
    const getRoomStartDateTime = moment(startDate);
    const getRoomEndDateTime = moment(endDate);

    const startTime = getRoomStartDateTime.diff(getCurrentDateTime, 'millisecond');
    const endTime = getRoomEndDateTime.diff(getCurrentDateTime, 'millisecond');

    return (
        <ul className={
            endTime === 0 ?
                `${isActive && `${css.booked__item} ${css.active}` || `${css.booked__item}`} ${css.red}`
                :
                startTime >= 0 ?
                    `${isActive && `${css.booked__item} ${css.active}` || `${css.booked__item}`}`
                    :
                    `${isActive && `${css.booked__item} ${css.active}` || `${css.booked__item}`} ${css.glowing}`
        }
        >
            <li className={css.booked__info}>
                <div>
                    {meetingName}
                </div>
            </li>
            <li>
                <ul className={css.booked__time}>
                    <li className={css.booked__info}>
                        <img src={calendar} alt="Data" height={15} width={15}/>
                        <Moment format={"YY-MM-DD | H:mm"}>
                            {startDate}
                        </Moment>
                    </li>
                    <li className={css.booked__info}>
                        <img src={clock} alt={"Time"} height={15} width={15}/>
                        {
                            endTime === 0 ?
                                "The event is already over"
                                :
                                startTime >= 0 ?
                                    <Moment fromNow ago interval={15000}>
                                        {getRoomStartDateTime}
                                    </Moment>
                                    :
                                    "It's on now"
                        }
                    </li>
                </ul>
            </li>
            <li className={css['booked__all-information']}>
                <ul className={css['booked__information-wrapper']}>
                    <li className={css['booked__all-information']}>
                        <span className={css['booked__information-name']}>
                            Creator:
                        </span>
                        {email}
                    </li>
                    <li className={css['booked__all-information']}>
                        <span className={css['booked__information-name']}>
                            Floor:
                        </span>
                        {floor}
                    </li>
                    <li className={css['booked__all-information']}>
                        <span className={css['booked__information-name']}>
                            Room:
                        </span>
                        {id}
                    </li>
                    <li className={css['booked__all-information']}>
                        <span className={css['booked__information-name']}>
                           Capacity:
                        </span>
                        {maxCapacity}
                    </li>
                    <li className={css['booked__all-information']}>
                        <span className={css['booked__information-name']}>
                            Date of meeting:
                        </span>
                        <Moment format={"YYYY-MM-DD"}>
                            {startDate}
                        </Moment>
                    </li>
                    <li className={css['booked__all-information']}>
                        <span className={css['booked__information-name']}>
                            Duration meeting:
                        </span>
                        <Moment format={"H:mm"}>
                            {startDate}
                        </Moment>
                        <span> - </span>
                        <Moment format={"H:mm"}>
                            {endDate}
                        </Moment>
                    </li>
                    <li>
                        <ul className={css.booked__staff}>
                            <li className={css['booked__all-information']} style={{display: 'flex', gridGap: '5px'}}>
                            <span className={css['booked__information-name']}>
                            Equipments:
                            </span>
                                <ul style={{display: 'flex', gridGap: '5px'}}>
                                    {
                                        staff.map((tool) =>
                                            equipments.map(equipment => equipment.id === tool.id ?
                                                <li key={tool.id}>
                                                    {
                                                        <img
                                                            src={tool.img}
                                                            alt={tool.alt}
                                                            width={15}
                                                            height={15}/>
                                                    }
                                                </li>
                                                :
                                                ''
                                            )
                                        )
                                    }
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li className={css['booked__all-information']}>
                            <span className={css['booked__information-name']}>
                                Members:
                            </span>
                            </li>
                            <li>
                                <ul className={css.booked__list}>
                                    {
                                        members.map(user =>
                                                <li key={user.id} className={css['booked__information-member']}>
                                    <span>
                                        {user.email}
                                    </span>
                                                </li>
                                        )
                                    }
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    );
};

export {BookedRoom};