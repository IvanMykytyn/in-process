import "moment/locale/uk";
import React, { FC, useEffect, useState } from "react";
import Moment from "react-moment";

// styles
import cn from "classnames";
import scss from "./sidebar.module.scss";

import { clock } from "../../assets/images/icons";
import { BookedRoom } from "components/BookedRoom/BookedRoom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  bookingActions,
  selectBooking,
  toggleSideBar,
} from "store/slices/booking.slice";
import { SideBarHeader } from "./SideBarHeader";

import { arrowLeft, arrowRight } from "../../assets/images/icons";
import { SideBarSkeleton } from "components";
import { PAGE_SIDEBAR_LIMIT } from "utils";

const SideBar: FC = () => {
  const [accordionIndex, setAccordionIndex] = useState<number>(-1);
  const { isSideBarOpen, bookingsOwn, ownLoading, page } =
    useAppSelector(selectBooking);
  const dispatch = useAppDispatch();

  const getTotalCountOfPages =
    bookingsOwn && Math.ceil(bookingsOwn.totalCount / 10);

  const handleClick = () => {
    dispatch(toggleSideBar());
  };

  const toggleAccordion = (index: number) => {
    setAccordionIndex((prev) => (prev === index ? -1 : index));
  };

  const getPage = (id: string) => {
    if (
      id === "+" &&
      typeof getTotalCountOfPages === "number" &&
      page < getTotalCountOfPages
    ) {
      dispatch(bookingActions.setPage(page + 1));
    } else if (id === "-" && page > 1) {
      dispatch(bookingActions.setPage(page - 1));
    }
  };

  useEffect(() => {
    dispatch(
      bookingActions.getAllOwnBookings({
        page: page,
        limit: PAGE_SIDEBAR_LIMIT,
      })
    );
  }, [dispatch, page]);

  useEffect(() => {
    function getBookingsWithDelay() {
      return setInterval(function () {
        dispatch(
          bookingActions.getAllOwnBookings({
            page: page,
            limit: PAGE_SIDEBAR_LIMIT,
          })
        );
      }, 60000);
    }

    const interval = getBookingsWithDelay();
    return () => {
      clearInterval(interval);
    };
  }, [dispatch, page]);


  return (
    <div
      className={
        isSideBarOpen ? `${scss.sidebar}` : `${scss.sidebar} ${scss.hide}`
      }
    >
      <div className={cn(scss.wrapper)}>
        <SideBarHeader />
        <button className={cn(scss.burger)} onClick={handleClick}>
          Menu
        </button>
      </div>
      <div className={scss.inner}>
        <span
          className={
            isSideBarOpen ? `${scss.clock}` : `${scss.clock} ${scss.hide}`
          }
        >
          <img src={clock} alt="clock" width={15} height={15} color={"red"} />
          <Moment locale={"uk"} local={true} format={`LLL`} interval={1000} />
        </span>
        {ownLoading ? (
          <ul
            className={
              isSideBarOpen
                ? `${scss.booked__skeleton}`
                : `${scss.booked} ${scss.hide}`
            }
          >
            <SideBarSkeleton amount={10} />
          </ul>
        ) : (
          <ul
            className={
              isSideBarOpen ? `${scss.booked}` : `${scss.booked} ${scss.hide}`
            }
          >
            {bookingsOwn?.data.length !== 0 ? (
              !!bookingsOwn &&
              bookingsOwn.data.map((value) => (
                <li key={value.id} onClick={() => toggleAccordion(value.id)}>
                  <BookedRoom
                    room={value.room}
                    meetingName={value.name}
                    creator={value.creator}
                    members={value.users}
                    endDate={value.end}
                    startDate={value.start}
                    isActive={accordionIndex === value.id}
                  />
                </li>
              ))
            ) : (
              <li>
                <h3 className={scss.null}>
                  You don't have any meetings added yet
                </h3>
              </li>
            )}
          </ul>
        )}
      </div>
      {!!bookingsOwn?.totalCount && bookingsOwn?.totalCount > PAGE_SIDEBAR_LIMIT && (
        <div className={scss.sidebar__buttons}>
          <button
            className={
              isSideBarOpen
                ? ownLoading ||
                  (typeof getTotalCountOfPages === "number" && page === 1)
                  ? `${scss.sidebar__button} ${scss.disabled}`
                  : `${scss.sidebar__button}`
                : `${scss.sidebar__button} ${scss.hide}`
            }
            onClick={() => getPage("-")}
            disabled={ownLoading || page === 0}
          >
            <img src={arrowLeft} alt={"arrow left"} height={10} width={10} />
          </button>
          <button
            className={
              isSideBarOpen
                ? ownLoading || page === getTotalCountOfPages
                  ? `${scss.sidebar__button} ${scss.disabled}`
                  : `${scss.sidebar__button}`
                : `${scss.sidebar__button} ${scss.hide}`
            }
            onClick={() => getPage("+")}
            disabled={ownLoading || page === getTotalCountOfPages}
          >
            <img src={arrowRight} alt={"arrow right"} height={10} width={10} />
          </button>
        </div>
      )}
    </div>
  );
};

export { SideBar };
