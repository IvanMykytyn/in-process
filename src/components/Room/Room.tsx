import { FC, memo } from "react";
import { Link } from "react-router-dom";

// styles
import cn from "classnames";
import css from "./room.module.scss";

import { IRooms } from "../../models";
import { staff } from "../../utils/tools/staff";
import { users } from "../../assets/images/icons";
import { bookingActions } from "store";
import { useAppDispatch } from "hooks";

interface RoomProps {
  room: IRooms;
}

const Room: FC<RoomProps> = memo(({ room }) => {
  const { id, name, equipments, maxCapacity, description, roomImg } =
    room && room;
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(bookingActions.resetEditingId());
  };

  return (
    <div data-testid={"room"} className={css.cardLinkWrapper}>
      <Link to={`/dashboard/booking-form?roomId=${id}`} onClick={handleClick}>
        <div className={cn(css.container)}>
          <div className={cn(css.cardWrapper)}>
            <div className={cn(css.photo)}>
              <img src={roomImg} className={cn(css.container__img)} alt='img' />
              <div className={cn(css.photo__icons)}>
                <img src={users} alt='users' width={15} height={15} />
                {maxCapacity}
              </div>
            </div>
            <h3 className={cn(css.container__name)}>{name}</h3>
            <p className={cn(css.container__description)}>{description}</p>
          </div>
          <ul className={cn(css.container__equipment)}>
            {staff.map((tool) => {
                if(equipments && equipments?.findIndex(inst => inst.id === tool.id) > -1){
                  return <img
                    key={tool.id}
                    src={tool.img}
                    alt={tool.alt}
                    title={tool.alt}
                    width={15}
                    height={15}
                  />
                }
                return null
                }
              )}
          </ul>
        </div>
      </Link>
    </div>
  );
});

export { Room };
