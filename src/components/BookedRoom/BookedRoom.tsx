import React, {DetailedHTMLProps, FC, HTMLAttributes, SetStateAction} from "react";
import Moment from "react-moment";
import moment from 'moment';

import css from './BookedRoom.module.scss';

import {clock, calendar, staffIcon, board, tv, marker} from '../../assets/images/icons';
import {IRooms, IUserOwn} from '../../models'
import {staff} from '../../utils/tools/staff';

interface Props {
    room: IRooms;
    endDate: string;
    startDate: string;
    creator: IUserOwn;
    members: IUserOwn[];
    meetingName: string;
}

const BookedRoom: FC<Props> = ({
                                   room: {id, name, floor, maxCapacity, equipments},
                                   endDate,
                                   startDate,
                                   creator: {firstName, lastName, email},
                                   members,
                                   meetingName
                               }) => {

    const getCurrentDateTime = moment();
    const getRoomStartDateTime = moment(startDate);
    const getRoomEndDateTime = moment(endDate);

    const startTime = getRoomStartDateTime.diff(getCurrentDateTime, 'millisecond');
    const endTime = getRoomEndDateTime.diff(getCurrentDateTime, 'millisecond');

    return (
        <div className={
            endTime === 0 ?
                `${css.booked__item} ${css.red}`
                :
                startTime >= 0 ?
                    `${css.booked__item}`
                    :
                    `${css.booked__item} ${css.glowing}`
        }>
            <div className={css.booked__info}>
                <span>
                    {meetingName}
                </span>
            </div>
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
            <div className={css['booked__all-information']}>
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
                    <div className={css.booked__staff}>
                        <div className={css['booked__all-information']} style={{display: 'flex', gridGap: '5px'}}>
                            <span className={css['booked__information-name']}>
                            Equipments:
                            </span>
                            {
                                staff.map((tool) =>
                                    equipments.map(equipment => equipment.id === tool.id ?
                                        <div key={tool.id}>
                                            {
                                                <img
                                                    src={tool.img}
                                                    alt={tool.alt}
                                                    width={15}
                                                    height={15}/>
                                            }
                                        </div>
                                        :
                                        ''
                                    )
                                )
                            }
                        </div>
                    </div>
                    <div>
                        <div className={css['booked__all-information']}>
                            <span className={css['booked__information-name']}>
                                Members:
                            </span>
                        </div>
                        <li>
                            <div className={css.booked__list}>
                                {
                                    members.map(user =>
                                            <div key={user.id} className={css['booked__information-member']}>
                                    <span>
                                        {user.email}
                                    </span>
                                            </div>
                                    )
                                }
                            </div>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export {BookedRoom};