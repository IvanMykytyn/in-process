import React, {FC} from 'react';
import {Link} from 'react-router-dom';

// styles
import cn from 'classnames'
import css from './room.module.scss'

import {IRooms} from '../../pages/Dashboard/Rooms/Rooms'
import {Modal, BookingForm} from '../index'
import {tools} from '../../utils/tools'
import {users} from '../../assets/images/icons'

interface RoomProps {
    room: IRooms
}

const Room: FC<RoomProps> = ({room}) => {

    return (
        <>
            <li className={cn(css.container)}>
                <div className={cn(css.photo)}>
                    <img src={room.img}
                         className={cn(css.container__img)}
                         alt="img" height={150}
                         width={150}/>
                    <div className={cn(css.photo__icons)}>
                        <img src={users} alt="users" width={15} height={15}/>{room.maxCapacity}
                    </div>
                </div>
                <h3 className={cn(css.container__name)}>
                    {room.name}
                </h3>
                <p className={cn(css.container__description)}>
                    {room.description}
                </p>
                <ul className={cn(css.container__equipment)}>
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
                </ul>
                <div className={cn(css.pre_btn)}>
                    <Link to={'/dashboard/bookig_form_page'} >
                        <button className={cn(css.pre_btn__btn)}>Book</button>
                    </Link>
                </div>
            </li>
        </>
    );
}

export {Room};