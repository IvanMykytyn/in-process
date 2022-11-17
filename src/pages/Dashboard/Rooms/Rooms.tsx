import {FC, useEffect, useCallback, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Scrollbar, Navigation, Keyboard, Mousewheel} from 'swiper';
import {StyledEngineProvider} from '@mui/material/styles';
import {useNavigate} from "react-router-dom";

// styles
import cn from 'classnames';
import css from './rooms.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/scrollbar";

// import 'swiper/swiper.min.css';

import {Room,DropdownMultiSelect} from '../../../components';
import {useAppDispatch, useWindowDimensionsHook} from '../../../hooks';

import {roomsService} from 'services/rooms.service';
import {IRooms} from '../../../models'
import {roomActions} from "store";

SwiperCore.use([Scrollbar]);
SwiperCore.use([Keyboard, Mousewheel]);

export interface IFilters {
    id: number,
    name: string
}

export const rooms: IRooms[] = [
    {
        id: 1,
        name: 'Room1',
        description: 'the room has PS and TV.That is all what you need',
        floor: 1,
        maxCapacity: 15,
        equipment: [
            {
                id: 0,
                name: '123'
            }, {
                id: 1,
                name: '123'
            }, {
                id: 2,
                name: '123'
            }, {
                id: 3,
                name: '123'
            }, {
                id: 4,
                name: '123'
            },
            {
                id: 5,
                name: '123'
            }
        ]
    },
];
export const filterCapacity: IFilters[] = [
    {
        id: 0,
        name: '5-10 capacity'
    },
    {
        id: 1,
        name: '10-20 capacity'
    },
    {
        id: 2,
        name: '20-30 capacity'
    }
]
export const filterItems: IFilters[] = [

    {
        id: 3,
        name: 'board'
    },
    {
        id: 4,
        name: 'tv'
    },
    {
        id: 5,
        name: 'marker'
    },
    {
        id: 6,
        name: 'sockets'
    },
    {
        id: 7,
        name: 'window'
    },
    {
        id: 8,
        name: 'conditioner'
    }
]

const Rooms: FC = () => {

    // const {rooms} = useAppSelector(state => state.rooms);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(roomActions.getAll())
    }, [dispatch]);

    const {width} = useWindowDimensionsHook();
    return (
        <div className={cn(css.wrapper)}>
            <ul className={cn(css.room_container)}>
                <li className={cn(css.floor)}>
                    <div className={cn(css.room_container__floor)}>
                        <span className={cn(css.room_container__span)}>
                            1-st floor
                        </span>
                        <div className={cn(css.filter)}>
                            <StyledEngineProvider injectFirst>
                                <DropdownMultiSelect filterItems={filterItems}
                                                     filterCapacity={filterCapacity}
                                                     name={'Filter'}
                                />
                            </StyledEngineProvider>
                        </div>

                    </div>
                    <Swiper
                        className={cn(css.my_swiper)}
                        navigation={true}
                        slidesPerView={width > 1700 ? 1700 / 400 : Math.floor(width / 350)}
                        modules={[Navigation]}
                        spaceBetween={25}
                        scrollbar={{draggable: true}}
                        mousewheel={true}
                    >
                        <ul className={cn(css.room_container__rooms)}>
                            {rooms.filter(room => room.floor === 1).map(room =>
                                <SwiperSlide className={cn(css.my_swiper__swiperslide)}
                                             key={room.id}
                                             virtualIndex={room.id}
                                >
                                    <Room room={room} key={room.id}/>

                                </SwiperSlide>
                            )}
                        </ul>
                    </Swiper>
                </li>

                <li className={cn(css.floor)}>
                    <div className={cn(css.room_container__floor)}>
                        <span className={cn(css.room_container__span)}>
                            2-nd floor
                        </span>
                    </div>
                    <Swiper
                        className={cn(css.my_swiper)}
                        navigation={true}
                        slidesPerView={width > 1700 ? 1700 / 400 : Math.floor(width / 350)}
                        modules={[Navigation]}
                        spaceBetween={25}
                        scrollbar={{draggable: true}}
                        mousewheel={true}
                    >
                        <ul className={cn(css.room_container__rooms)}>
                            {rooms.filter(room => room.floor === 2).map(room =>
                                <SwiperSlide className={cn(css.my_swiper__swiperslide)}
                                             key={room.id}
                                             virtualIndex={room.id}
                                >
                                    <Room room={room} key={room.id}/>

                                </SwiperSlide>
                            )}
                        </ul>
                    </Swiper>
                </li>
            </ul>
        </div>
    );
};

export {Rooms};
