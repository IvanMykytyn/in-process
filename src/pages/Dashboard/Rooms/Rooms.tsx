import {FC, useEffect, useCallback, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Scrollbar, Navigation, Keyboard, Mousewheel, Autoplay} from 'swiper';
import {StyledEngineProvider} from '@mui/material/styles';
import {useNavigate} from "react-router-dom";

// styles
import cn from 'classnames';
import css from './rooms.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/scrollbar";

// import 'swiper/swiper.min.css';

import {Room, DropdownMultiSelect} from '../../../components';
import {useAppDispatch, useAppSelector, useWindowDimensionsHook} from '../../../hooks';

import {roomActions} from "store";

SwiperCore.use([Scrollbar]);
SwiperCore.use([Keyboard, Mousewheel]);
SwiperCore.use([Autoplay]);

export interface IFilters {
    id: number,
    name: string
}

// export const rooms: IRooms[] = [
//     {
//         id: 1,
//         name: 'Room1',
//         img: 'https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg',
//         description: 'the room has PS and TV.That is all what you need',
//         floor: 1,
//         maxCapacity: 15,
//         officeId: 1,
//         equipment: [
//             {
//                 id: '0'
//             }, {
//                 id: '1'
//             }, {
//                 id: '2'
//             }, {
//                 id: '3'
//             }, {
//                 id: '4'
//             },
//             {
//                 id: '5'
//             }
//         ]
//     },
//     {
//         id: 2,
//         name: 'Room2',
//         img: 'https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg',
//         description: 'the room has PS and TV.That is all what you need',
//         floor: 1,
//         maxCapacity: 15,
//         officeId: 1,
//         equipment: [
//             {
//                 id: '0'
//             }, {
//                 id: '1'
//             }, {
//                 id: '3'
//             }, {
//                 id: '4'
//             },
//             {
//                 id: '5'
//             }
//         ]
//     },
//     {
//         id: 3,
//         name: 'Room3',
//         img: 'https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg',
//         description: 'the room has PS and TV.That is all what you need',
//         floor: 1,
//         maxCapacity: 15,
//         officeId: 1,
//         equipment: [
//             {
//                 id: '1'
//             }, {
//                 id: '2'
//             }, {
//                 id: '3'
//             }, {
//                 id: '4'
//             },
//             {
//                 id: '5'
//             }
//         ]
//     },
//     {
//         id: 100,
//         name: 'Room9',
//         img: 'https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg',
//         description: 'the room has PS and TV.That is all what you need',
//         floor: 2,
//         maxCapacity: 15,
//         officeId: 1,
//         equipment: [
//             {
//                 id: '1'
//             }, {
//                 id: '2'
//             }, {
//                 id: '3'
//             }, {
//                 id: '5'
//             }
//         ]
//     },
//     {
//         id: 4,
//         name: 'Room6',
//         img: 'https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg',
//         description: 'the room has PS and TV.That is all what you need',
//         floor: 2,
//         maxCapacity: 15,
//         officeId: 1,
//         equipment: [
//             {
//                 id: '1'
//             }, {
//                 id: '2'
//             }, {
//                 id: '3'
//             }
//         ]
//     },
//     {
//         id: 5,
//         name: 'Room8',
//         img: 'https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg',
//         description: 'the room has PS and TV.That is all what you need',
//         floor: 2,
//         maxCapacity: 15,
//         officeId: 1,
//         equipment: [
//             {
//                 id: '1'
//             }, {
//                 id: '2'
//             }, {
//                 id: '3'
//             }
//         ]
//     },
//     {
//         id: 6,
//         name: 'Room1',
//         img: 'https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg',
//         description: 'the room has PS and TV.That is all what you need',
//         floor: 1,
//         maxCapacity: 15,
//         officeId: 1,
//         equipment: [
//             {
//                 id: '0'
//             }, {
//                 id: '1'
//             }, {
//                 id: '2'
//             }, {
//                 id: '3'
//             }
//         ]
//     },
//     {
//         id: 30,
//         name: 'Room1',
//         img: 'https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg',
//         description: 'the room has PS and TV.That is all what you need',
//         floor: 1,
//         maxCapacity: 15,
//         officeId: 1,
//         equipment: [
//             {
//                 id: '0'
//             }, {
//                 id: '1'
//             }, {
//                 id: '2'
//             }, {
//                 id: '3'
//             }
//         ]
//     }, {
//         id: 8,
//         name: 'Room1',
//         img: 'https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg',
//         description: 'the room has PS and TV.That is all what you need',
//         floor: 2,
//         maxCapacity: 15,
//         officeId: 1,
//         equipment: [
//             {
//                 id: '0'
//             }, {
//                 id: '1'
//             }, {
//                 id: '2'
//             }, {
//                 id: '3'
//             }
//         ]
//     },
//     {
//         id: 9,
//         name: 'Room1',
//         img: 'https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg',
//         description: 'the room has PS and TV.That is all what you need',
//         floor: 2,
//         maxCapacity: 15,
//         officeId: 1,
//         equipment: [
//             {
//                 id: '0'
//             }, {
//                 id: '1'
//             }, {
//                 id: '2'
//             }, {
//                 id: '3'
//             }
//         ]
//     },
//     {
//         id: 10,
//         name: 'Room30',
//         img: 'https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg',
//         description: 'the room has PS and TV.That is all what you need',
//         floor: 2,
//         maxCapacity: 15,
//         officeId: 1,
//         equipment: [
//             {
//                 id: '0'
//             }, {
//                 id: '1'
//             }, {
//                 id: '2'
//             }, {
//                 id: '3'
//             }
//         ]
//     },
// ]
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

    const {rooms} = useAppSelector(state => state.rooms);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(roomActions.getAllRooms({officeId: 2}))
    }, [dispatch, rooms]);

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
                        autoplay={{
                            delay: 3000,
                        }}
                        navigation={true}
                        slidesPerView={width > 1700 ? 1700 / 350 : Math.floor(width / 350)}
                        loop={true}
                        modules={[Navigation]}
                        spaceBetween={25}
                        scrollbar={{draggable: true}}
                        mousewheel={true}
                    >
                        <ul className={cn(css.room_container__rooms)}>
                            {rooms && rooms.filter(room => room.floor === 2).map(room =>
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
                        slidesPerView={width > 1700 ? 1700 / 350 : Math.floor(width / 350)}
                        autoplay={{
                            delay: 3000,
                        }}
                        loop={true}
                        modules={[Navigation]}
                        spaceBetween={25}
                        scrollbar={{draggable: true}}
                        mousewheel={true}
                    >
                        <ul className={cn(css.room_container__rooms)}>
                            {rooms && rooms.filter(room => room.floor === 2).map(room =>
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
