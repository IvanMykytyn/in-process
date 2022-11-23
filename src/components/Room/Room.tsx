import React, {FC} from 'react';
import {Link} from 'react-router-dom';

// styles
import cn from 'classnames';
import css from './room.module.scss';

import {IRooms} from '../../models';
import {staff} from '../../utils/tools/staff';
import {users} from '../../assets/images/icons';
import {photos} from '../../utils/tools/rooms.img';

interface RoomProps {
    room: IRooms
};

const Room: FC<RoomProps> = ({room}) => {
    const {id, name, equipments, maxCapacity, description} = room && room;

    return (
        <ul>
            <Link to={`/dashboard/booking-form?roomId=${id}`}>
                <li className={cn(css.container)}>
                    <div className={cn(css.photo)}>
                        {photos.map(photo => photo.id === id ?
                            <img src={photo.img}
                                 className={cn(css.container__img)}
                                 alt="img"
                                 key={photo.id}
                                 height={150}
                                 width={150}
                            />
                            :
                            ''
                        )}
                        <div className={cn(css.photo__icons)}>
                            <img src={users} alt="users" width={15} height={15}/>{maxCapacity}
                        </div>
                    </div>
                    <h3 className={cn(css.container__name)}>
                        {name}
                    </h3>
                    <p className={cn(css.container__description)}>
                        {description}
                    </p>
                    <ul className={cn(css.container__equipment)}>
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
                            )}
                    </ul>
                </li>
            </Link>
        </ul>
    );
}

export {Room};