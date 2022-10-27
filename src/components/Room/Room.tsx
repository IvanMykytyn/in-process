import React, {FC} from 'react';

// styles
import cn from 'classnames'
import css from './room.module.scss'

import {IRooms} from '../../pages/Dashboard/Rooms/Rooms'
import {Button} from '../index'
import {tools} from '../../utils/tools'
import {users} from '../../assets/images/icons'

interface RoomProps {
    room: IRooms
}

const Room: FC<RoomProps> = ({room}) => {

    return (
        <>
            <li className={cn(css.container)}>
                <img src={room.img}
                     className={cn(css.container__img)}
                     alt="img" height={150}
                     width={150}/>
                <h3 className={cn(css.container__name)}>
                    {room.name}
                </h3>
                <p className={cn(css.container__description)}>
                    {room.description}
                </p>
                <span className={cn(css.container__equipment)}>
                    {
                        tools.map((tool) =>
                            room.equipment.map(inst => inst.id === tool.id ?
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
                    <img src={users} alt="users" width={15} height={15}/>{room.maxCapacity}
                </span>
                <Button type={'button'} fullWidth={true}>Booking</Button>
            </li>
        </>
    );
}

export {Room};