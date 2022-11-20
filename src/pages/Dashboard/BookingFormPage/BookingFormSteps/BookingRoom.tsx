import css from './Booking-room.module.scss';
import cn from 'classnames';

import React, { FC } from 'react';
import { InstrumentsProps } from 'models';
import { staff } from 'utils/tools/staff';
import { roomsImg } from 'assets/images/bg';

interface BookingRoomProps {
  id: number;
  name: string;
  floor: number;
  maxCapacity: number;
  equipments: InstrumentsProps[];
  handleChange: (id: number) => void;
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
        <img src={roomsImg} alt="room" />
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
                    {<img src={tool.img} alt={tool.alt} width={20} height={20} />}
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
