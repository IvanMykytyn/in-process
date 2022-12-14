import { FC, useEffect, useRef } from "react";
// full calendar plugins
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import dayViewPlugin from "./DayCalendar/DayCalendarPlugin";

import moment from "moment";
import { useNavigate } from "react-router";

// styles
import "./calendar.styles.scss";

import { getAllBookings } from "store";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { closePopover, selectBooking } from "store/slices/booking.slice";

import { colorFromString } from "utils";

import { TimeSlot } from "./Grid";
import { buildEvents } from "./FullCalendarComponents/BuildEvent";
import { PopoverWrapper } from "./Events";
import { Loading } from "components";

const Calendar: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const calendarRef = useRef<null | any>(null);

  const {
    isSideBarOpen,
    isBookingLoading,
    bookings,
    isPopoverOpen,
    currentBooking,
  } = useAppSelector(selectBooking);

  const fullCalendarBookings = bookings.map((book) => {
    const {
      name,
      start,
      end,
      description,
      room,
      id,
      users,
      creator,
      schedule,
    } = book;

    return {
      id: id.toString(),
      title: name,
      start,
      end,
      extendedProps: {
        description: description,
        room: room,
        users: users,
        color: colorFromString(name ?? ""),
        creator,
        schedule,
      },
    };
  });

  const getRangeOfBookings = (start: string, end: string) => {
    dispatch(
      getAllBookings({
        startDate: start,
        endDate: end,
        officeId: 2,
      })
    );
  };
  useEffect(() => {
    dispatch(closePopover());
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      calendarRef?.current?.getApi?.().updateSize();
    }, 1200);
  }, [isSideBarOpen]);

  // const scrollTo = moment().format('HH') + ':00:00';

  return (
    <div className="full-calendar">
      {isBookingLoading && (
        <div className='loading-wrapper'>
          <Loading />
        </div>
      )}
      <FullCalendar
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          dayViewPlugin,
          listPlugin,
        ]}
        ref={calendarRef}
        timeZone="local"
        initialView={"dayGridMonth"}
        locale={"en-GB"}
        allDaySlot={false}
        // slot
        slotLabelInterval={"01:00"}
        slotDuration={"01:00"}
        slotLabelFormat={{
          hour: "numeric",
          minute: "2-digit",
          omitZeroMinute: false,
        }}
        slotLabelContent={(props) => (
          <TimeSlot hour={+props.text.split(":")[0]} {...props} />
        )}
        // header
        headerToolbar={{
          left: "addBooking today",
          center: "prev,title,next",
          right: "day,timeGridWeek,dayGridMonth,listWeek",
        }}
        selectable={false}
        selectMirror={false}
        dayMaxEvents={true}
        nowIndicator={true}
        navLinks={true}
        // loading={(isLoading) => {
        //   if(isLoading) return <Loading />
        // }}
        // weekends={false}
        // event
        events={fullCalendarBookings}
        eventContent={buildEvents}
        // buttons
        customButtons={{
          addBooking: {
            text: "Add",
            click: () => {
              const { currentDate } =
                calendarRef?.current?.getApi?.().currentDataManager.data;
              const date = moment(currentDate).toISOString();
              navigate(`/dashboard/booking-form?date=${date}`);
            },
          },
        }}
        datesSet={(params) => {
          const { endStr, startStr } = params;
          getRangeOfBookings(
            moment(startStr).toISOString(),
            moment(endStr).toISOString()
          );
        }}
      />

      {isPopoverOpen && currentBooking && (
        <PopoverWrapper event={currentBooking} />
      )}
    </div>
  );
};

export { Calendar };
