import { FC, useEffect, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, FreeMode } from "swiper";
import { StyledEngineProvider } from "@mui/material/styles";

// styles
import cn from "classnames";
import css from "./rooms.module.scss";

import "swiper/swiper.min.css";

import { Room, DropdownMultiSelect } from "../../../components";
import { useAppDispatch, useAppSelector } from "../../../hooks";

import { RoomSkeleton } from "../../../components/Skeleton/RoomSkeleton";
import { capacityFilter, equipmentsFilter } from "./constants";
import { clearFilter } from "store/slices/filter.slice";

const Rooms: FC = () => {
  const dispatch = useAppDispatch()
  const { rooms, filteredRooms, isLoading } = useAppSelector(
    (state) => state.rooms
  );

  const firstFloorRooms = useMemo(
    () => filteredRooms.filter((room) => room.floor === 1),
    [filteredRooms]
  );
  
  const secondFloorRooms = useMemo(
    () => filteredRooms.filter((room) => room.floor === 2),
    [filteredRooms]
  );

  useEffect(() => {
    dispatch(clearFilter())
  }, [dispatch])

  return (
    <div role="main" className={cn(css.wrapper)}>
      <ul className={cn(css.room_container)}>
        <li className={cn(css.floor)}>
          <div className={cn(css.room_container__floor)}>
            {(firstFloorRooms.length !== 0 || isLoading) && (
              <span className={cn(css.room_container__span)}>1-st floor</span>
            )}
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
            mousewheel={true}
            freeMode={true}
            slidesPerView='auto'
            scrollbar={true}
            modules={[Keyboard, Mousewheel, FreeMode]}
            spaceBetween={5}
            hidden={firstFloorRooms?.length === 0 && !isLoading}
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
                : firstFloorRooms?.length !== 0 &&
                  firstFloorRooms.map((room) => (
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
            mousewheel={true}
            freeMode={true}
            slidesPerView='auto'
            scrollbar={true}
            modules={[Keyboard, Mousewheel, FreeMode]}
            spaceBetween={5}
            hidden={secondFloorRooms?.length === 0 && !isLoading}
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
                : secondFloorRooms?.length !== 0 &&
                  secondFloorRooms.map((room) => (
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
      <div className={css.shadow}></div>
    </div>
  );
};

export { Rooms };
