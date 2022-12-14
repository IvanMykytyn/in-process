import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Scrollbar,
  Navigation,
  Keyboard,
  Mousewheel,
  FreeMode,
  Autoplay,
} from "swiper";
import { StyledEngineProvider } from "@mui/material/styles";

// styles
import cn from "classnames";
import css from "./rooms.module.scss";

// import 'swiper/css';
import "swiper/swiper.min.css";
// import 'swiper/css/navigation';
// import "swiper/css/scrollbar";

import { Room, DropdownMultiSelect } from "../../../components";
import {
  useAppDispatch,
  useAppSelector,
  useWindowDimensionsHook,
} from "../../../hooks";

import { roomActions } from "store";
import { RoomSkeleton } from "../../../components/Skeleton/RoomSkeleton";
import { capacityFilter, equipmentsFilter } from "./constants";

// SwiperCore.use([Scrollbar]);
// SwiperCore.use([Keyboard, Mousewheel]);
// SwiperCore.use([Autoplay]);

const Rooms: FC = () => {
  // const [isLoading,setIsLoading] = useState(true);
  const { rooms, filteredRooms, isLoading } = useAppSelector(
    (state) => state.rooms
  );

  return (
    <div className={cn(css.wrapper)}>
      <ul className={cn(css.room_container)}>
        <li className={cn(css.floor)}>
          <div className={cn(css.room_container__floor)}>
            <span className={cn(css.room_container__span)}>1-st floor</span>
            <div className={cn(css.filter)}>
              <StyledEngineProvider injectFirst>
                <DropdownMultiSelect
                  filterRange={equipmentsFilter}
                  filterCapacity={capacityFilter}
                  rooms={rooms}
                />
              </StyledEngineProvider>
            </div>
          </div>
          <Swiper
            className={cn(css.my_swiper)}
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
            mousewheel={true}
            freeMode={true}
            scrollbar={true}
            modules={[Keyboard, Mousewheel, FreeMode]}
            spaceBetween={5}
          >
            <ul className={cn(css.room_container__rooms)}>
              {isLoading
                ? [...new Array(8)].map((_, index) => (
                    <SwiperSlide
                      className={cn(css.my_swiper__swiperslide)}
                      key={index}
                      virtualIndex={index}
                    >
                      <RoomSkeleton key={index} />
                    </SwiperSlide>
                  ))
                : filteredRooms &&
                  filteredRooms
                    .filter((room) => room.floor === 1)
                    .map((room) => (
                      <SwiperSlide
                        className={cn(css.my_swiper__swiperslide)}
                        key={room.id}
                        virtualIndex={room.id}
                      >
                        <Room key={room.id} room={room} />
                      </SwiperSlide>
                    ))}
            </ul>
          </Swiper>
        </li>

        <li className={cn(css.floor)}>
          <div className={cn(css.room_container__floor)}>
            <span className={cn(css.room_container__span)}>2-nd floor</span>
          </div>
          <Swiper
            className={cn(css.my_swiper)}
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
            mousewheel={true}
            freeMode={true}
            scrollbar={true}
            modules={[Keyboard, Mousewheel, FreeMode]}
            spaceBetween={5}
          >
            <ul className={cn(css.room_container__rooms)}>
              {isLoading
                ? [...new Array(8)].map((_, index) => (
                    <SwiperSlide
                      className={cn(css.my_swiper__swiperslide)}
                      key={index}
                      virtualIndex={index}
                    >
                      <RoomSkeleton key={index} />
                    </SwiperSlide>
                  ))
                : filteredRooms &&
                  filteredRooms
                    .filter((room) => room.floor === 2)
                    .map((room) => (
                      <SwiperSlide
                        className={cn(css.my_swiper__swiperslide)}
                        key={room.id}
                        virtualIndex={room.id}
                      >
                        <Room key={room.id} room={room} />
                      </SwiperSlide>
                    ))}
            </ul>
          </Swiper>
        </li>
      </ul>
    </div>
  );
};

export { Rooms };
