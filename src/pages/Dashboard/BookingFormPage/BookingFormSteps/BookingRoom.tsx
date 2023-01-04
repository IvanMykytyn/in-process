import css from './Booking-room.module.scss';
import cn from 'classnames';

import { FC } from 'react';
import { EquipmentsProps } from 'models';
import { staff } from 'utils/tools/staff';

interface BookingRoomProps {
  id: number;
  name: string;
  floor: number;
  maxCapacity: number;
  equipments: EquipmentsProps[];
  handleChange: (id: number) => void;
  roomImg: string;
  disabled?: boolean;
  isActive?: boolean;
}

const BookingRoom: FC<BookingRoomProps> = ({
  id,
  name,
  floor,
  maxCapacity,
  equipments,
  handleChange,
  disabled,
  isActive,
  roomImg,
}) => {
  return (
    <div
      role={'button'}
      className={cn(css['booking-room'], {
        [css['disabled-booking-room']]: disabled,
        [css['active-booking-room']]: isActive,
      })}
      onClick={() => handleChange(id)}
    >
      <div className={css['booking-room__image-section']}>
        <img src={roomImg} alt="room" />
      </div>
      <div className={css['booking-room__content']}>
        <div className={css['booking-room__text-content']}>
          <h3 className={css['booking-room__name']}>{name}</h3>
          <p className={css['booking-room__max-capacity']}>
            {maxCapacity + ' persons'}
          </p>
        </div>
        <ul className={cn(css.container__equipment)}>
          <li className={css['floor-number']}>{floor}</li>
          {staff.map((tool) =>
            equipments?.map(
              (inst) =>
                inst.id === tool.id && (
                  <li key={tool.id}>
                    {<img src={tool.img} title={tool.alt} alt={tool.alt} width={20} height={20} />}
                  </li>
                )
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export { BookingRoom };
