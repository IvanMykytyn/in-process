import React, { FC } from "react";
import Moment from "react-moment";
import moment from "moment";

import css from "./BookedRoom.module.scss";
import cn from "classnames";

import { clock, calendar } from "../../assets/images/icons";
import { IRooms, IUserOwn } from "../../models";

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
  room: { id, name, floor, maxCapacity, equipments },
  endDate,
  startDate,
  creator: { email },
  members,
  meetingName,
  isActive,
}) => {
  const getCurrentDateTime = moment();
  const getRoomStartDateTime = moment(startDate);
  const getRoomEndDateTime = moment(endDate);

  const startTime = getRoomStartDateTime.diff(
    getCurrentDateTime,
    "millisecond"
  );
  const endTime = getRoomEndDateTime.diff(getCurrentDateTime, "millisecond");

  return (
    <div
      className={
        endTime === 0
          ? `${
              (isActive && `${css.booked__item} ${css.active}`) ||
              `${css.booked__item}`
            } ${css.red}`
          : startTime >= 0
          ? `${
              (isActive && `${css.booked__item} ${css.active}`) ||
              `${css.booked__item}`
            }`
          : `${
              (isActive && `${css.booked__item} ${css.active}`) ||
              `${css.booked__item}`
            } ${css.glowing}`
      }
    >
      <div className={css.booked__info}>
        <span className={css.meetingName}>{meetingName}</span>
      </div>
      <ul className={css.booked__time}>
        <li className={css.booked__info}>
          <img src={calendar} alt='Data' height={15} width={15} />
          <Moment format={"YY-MM-DD | H:mm"}>{startDate}</Moment>
        </li>
        <li className={css.booked__info}>
          <img src={clock} alt={"Time"} height={15} width={15} />
          {endTime === 0 ? (
            "The event is already over"
          ) : startTime >= 0 ? (
            <Moment fromNow ago interval={5000}>
              {getRoomStartDateTime}
            </Moment>
          ) : (
            "It's on now"
          )}
        </li>
      </ul>
      <div className={css["booked__all-information"]}>
        <ul className={css["booked__information-wrapper"]}>
          <li
            className={cn(
              css["booked__all-information"],
              css["booked__all-information-name"],
              css["booked__all-information-name__creator"]
            )}
          >
            <span className={css["booked__information-name"]}>Creator:</span>
            <p>{email}</p>
          </li>
          <li className={css["booked__all-information"]}>
            <span className={css["booked__information-name"]}>Floor:</span>
            {floor}
          </li>
          <li className={css["booked__all-information"]}>
            <span className={css["booked__information-name"]}>{name?.split(' ')?.[0]}</span>
            {name?.split(' ')?.[1]}
          </li>
          <li className={css["booked__all-information"]}>
            <span className={css["booked__information-name"]}>Capacity:</span>
            {maxCapacity}
          </li>
          <li className={css["booked__all-information"]}>
            <span className={css["booked__information-name"]}>
              Date of meeting:
            </span>
            <Moment format={"YYYY-MM-DD"}>{startDate}</Moment>
          </li>
          <li className={css["booked__all-information"]}>
            <span className={css["booked__information-name"]}>
              Duration meeting:
            </span>
            <Moment format={"H:mm"}>{startDate}</Moment>
            <span> - </span>
            <Moment format={"H:mm"}>{endDate}</Moment>
          </li>
          <div>
            <div
              className={cn(
                css["booked__all-information"],
                css["booked__all-information-name"]
              )}
            >
              <span className={cn(css["booked__information-name"])}>
                Members: {!members.length && '0'}
              </span>
            </div>
            <li>
              <div className={css.booked__list}>
                {!!members.length && (
                  members.map((user) => (
                    <div
                      key={user.id}
                      className={css["booked__information-member"]}
                    >
                      <span>{user.email}</span>
                    </div>
                  ))
                )}
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export { BookedRoom };
