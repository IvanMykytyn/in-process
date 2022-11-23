import {FC, useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Scrollbar, Navigation, Keyboard, Mousewheel, Autoplay} from 'swiper';
import {StyledEngineProvider} from '@mui/material/styles';

// styles
import cn from 'classnames';
import css from './rooms.module.scss';

// import 'swiper/css';
import 'swiper/swiper.min.css';
// import 'swiper/css/navigation';
// import "swiper/css/scrollbar";

import {Room, DropdownMultiSelect} from '../../../components';
import {useAppDispatch, useAppSelector, useWindowDimensionsHook} from '../../../hooks';

import {roomActions} from "store";
import {InstrumentsProps} from "../../../models";
import {RoomSkeleton} from "../../../components/Skeleton/RoomSkeleton";

SwiperCore.use([Scrollbar]);
SwiperCore.use([Keyboard, Mousewheel]);
SwiperCore.use([Autoplay]);

export interface IFilters {
    id: number,
    name: string,
    range: [
        number,
        number
    ]
};

export const filterCapacity: IFilters[] = [
    {
        id: 0,
        name: '0-10',
        range: [0,10]
    },
    {
        id: 1,
        name: '10-20',
        range: [10,20]
    },
    {
        id: 2,
        name: '20-30',
        range: [20,30]
    }
]
export const filterItems: InstrumentsProps[] = [
    {
        id: 0,
        name: 'board'
    },
    {
        id: 1,
        name: 'tv'
    },
    {
        id: 2,
        name: 'marker'
    },
    {
        id: 3,
        name: 'sockets'
    },
    {
        id: 4,
        name: 'window'
    },
    {
        id: 5,
        name: 'conditioner'
    }
]

const Rooms: FC = () => {
    const [isLoading,setIsLoading] = useState(true);
    const {rooms} = useAppSelector(state => state.rooms);

    const {filteredRooms} = useAppSelector(state => state.rooms);

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
                                                     rooms={rooms}
                                />
                            </StyledEngineProvider>
                        </div>

                    </div>
                    <Swiper
                        className={cn(css.my_swiper)}
                        // autoplay={{
                        //     delay: 5000,
                        // }}
                        navigation={true}
                        // slidesPerView={width > 1700 ? 1700 / 350 : Math.floor(width / 350)}
                        breakpoints={{
                            // when window width is >= 1100px
                            1100: {
                                width: 1100,
                                slidesPerView: 4.5,
                            },
                            1500: {
                                width: 1500,
                                slidesPerView: 6,
                            },
                            // when window width is >= 1900px
                            1900: {
                                width: 1900,
                                slidesPerView: 7,
                            },
                        }}
                        loop={true}
                        modules={[Navigation]}
                        spaceBetween={5}
                        // scrollbar={{draggable: true}}
                        mousewheel={true}
                    >
                        <ul className={cn(css.room_container__rooms)}>
                            {/*{isLoading ? [...new Array(3)].map((_,index)=> <RoomSkeleton key={index}/>) :*/}
                            { filteredRooms && filteredRooms.filter(room => room.floor === 1).map(room =>
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
                        // autoplay={{
                        //     delay: 5000,
                        // }}
                        navigation={true}
                        // slidesPerView={width > 1700 ? 1700 / 350 : Math.floor(width / 350)}
                        breakpoints={{
                            // when window width is >= 1100px
                            1100: {
                                width: 1100,
                                slidesPerView: 4.5,
                            },
                            1500: {
                                width: 1500,
                                slidesPerView: 6,
                            },
                            // when window width is >= 1900px
                            1900: {
                                width: 1900,
                                slidesPerView: 7,
                            },
                        }}
                        loop={true}
                        modules={[Navigation]}
                        spaceBetween={5}
                        // scrollbar={{draggable: true}}
                        mousewheel={true}
                    >
                        <ul className={cn(css.room_container__rooms)}>
                            {/*{isLoading ? [...new Array(3)].map((_,index)=> <RoomSkeleton key={index}/>) :*/}
                            {filteredRooms && filteredRooms.filter(room => room.floor === 2).map(room =>
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
