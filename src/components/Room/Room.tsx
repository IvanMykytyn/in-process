import React, { FC } from "react";
import { Link } from "react-router-dom";

// styles
import cn from "classnames";
import css from "./room.module.scss";

import { IRooms } from "../../models";
import { staff } from "../../utils/tools/staff";
import { users } from "../../assets/images/icons";
import { photos } from "../../utils/tools/rooms.img";
import { bookingActions } from "store";
import { useAppDispatch } from "hooks";

interface RoomProps {
  room: IRooms;
}

const Room: FC<RoomProps> = ({ room }) => {
  const { id, name, equipments, maxCapacity, description, roomImg } =
    room && room;
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(bookingActions.resetEditingId());
  };

  return (
    <ul>
      <Link to={`/dashboard/booking-form?roomId=${id}`} onClick={handleClick}>
        <li className={cn(css.container)}>
          <div className={cn(css.photo)}>
            {photos.map((photo) =>
              photo.id === id ? (
                <img
                  src={photo.img}
                  key={photo.id}
                  className={cn(css.container__img)}
                  alt="img"
                  height={150}
                  width={150}
                />
              ) : (
                ""
              )
            )}
            <div className={cn(css.photo__icons)}>
              <img src={users} alt="users" width={15} height={15} />
              {maxCapacity}
            </div>
          </div>
          <h3 className={cn(css.container__name)}>{name}</h3>
          <p className={cn(css.container__description)}>{description}</p>
          <ul className={cn(css.container__equipment)}>
            {staff.map((tool) =>
              equipments.map((equipment) =>
                equipment.id === tool.id ? (
                  <li key={tool.id}>
                    {
                      <img
                        src={tool.img}
                        alt={tool.alt}
                        width={15}
                        height={15}
                      />
                    }
                  </li>
                ) : (
                  ""
                )
              )
            )}
          </ul>
          {/*<div className={cn(css.pre_button)}>*/}
          {/*    <Link to={'/dashboard/timeline'}>*/}
          {/*        <button className={cn(css.pre_button__button)}>Soonest Booking</button>*/}
          {/*    </Link>*/}
          {/*</div>*/}
        </li>
      </Link>
    </ul>
  );
};

export { Room };
