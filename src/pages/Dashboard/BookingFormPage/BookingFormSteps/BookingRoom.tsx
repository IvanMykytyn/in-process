import css from './Booking-room.module.scss';
import cn from 'classnames';

import { FC, memo } from 'react';
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

const BookingRoom: FC<BookingRoomProps> = memo(({
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
          {staff.map((tool) => {
              if(equipments && equipments?.findIndex(inst => inst.id === tool.id) > -1){
                return <img
                  key={tool.id}
                  src={tool.img}
                  alt={tool.alt}
                  title={tool.alt}
                  width={18}
                  height={18}
                />
              }
              return null
              }
            )}
        </ul>
      </div>
    </div>
  );
});

export { BookingRoom };
