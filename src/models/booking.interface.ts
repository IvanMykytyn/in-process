import { IUserOwn, UserInterface } from './user.interface';
import { IRooms } from './rooms.interface';
import { Moment } from 'moment';

interface BookingInterface {
  id: number;
  start: string;
  end: string;
  name: string;
  description: string;
  roomId: string;
  users: Array<UserInterface>;
}

interface IBookingRecurring {
  start: string;
  end: string;
  since: string;
  until: string;
  pattern: PatternType;
  name: string;
  description: string;
  roomId: string;
  users: string[];
}

interface IBookingPut {
  scheduleId: number;
  name: string;
  description: string;
  roomId: string;
  usersIds: [null];
}

interface IBookingDelete {
  scheduleId: number;
}

interface IBookingOneTime {
  start: string;
  end: string;
  name: string;
  description: string;
  roomId: string;
  users: string[];
}

interface IBookingOneTimePut extends IBookingOneTime {
  id: number;
}
interface IBookingOneTimePutEdited extends Omit<IBookingOneTimePut, 'users'>{
  usersIds: string[];
}
interface IBookingOneTimeDelete {
  bookingId: number;
}

interface IBookingOwnData {
  id: number;
  start: string;
  end: string;
  name: string;
  description: string;
  users: IUserOwn[];
  creator: IUserOwn;
  room: IRooms;
}

interface IBookingOwn {
  data: IBookingOwnData[];
  page: string;
  limit: string;
  totalCount: number;
}
interface ISchedule {
  end: string;
  id: number;
  pattern: PatternType;
  since: string;
  start: string;
  until: string;
}

type PatternType = DaysOfEveryNWeeksType | XDayOfEveryNMonthType | EveryNDayType;

interface PatternKind {
  kind: 'DAYS_OF_EVERY_N_WEEKS' | 'X_DAY_OF_EVERY_N_MONTH' | 'EVERY_N_DAYS';
}
interface DaysOfEveryNWeeksType extends PatternKind {
  kind: 'DAYS_OF_EVERY_N_WEEKS';
  days: number[];
  weeks: number;
}
interface XDayOfEveryNMonthType extends PatternKind {
  kind: 'X_DAY_OF_EVERY_N_MONTH';
  days: number;
  month: number;
}

interface EveryNDayType extends PatternKind {
  kind: 'EVERY_N_DAYS';
  days: number;
}
interface SingleBooking {
  id: number;
  start: string;
  end: string;
  name: string;
  description: string;
  users: IUserOwn[];
  creator: IUserOwn;
  room: Omit<IRooms, 'currentBooking'>;
  schedule: ISchedule | null;
}
interface GetAllBookingsResponse {
  data: {
    period: {
      startDate: string;
      endDate: string;
    };
    bookings: SingleBooking[];
  };
}
interface ExtendedSingleBooking extends Omit<SingleBooking, 'start' | 'end'> {
  viewType: 'day' | 'week' | 'month' | 'list';
  start: Moment;
  end: Moment;
  color: string;
}

interface ExtendedSingleISOBooking extends SingleBooking {
  viewType: 'day' | 'week' | 'month' | 'list';
  color: string;
}

export type {
  BookingInterface,
  IBookingRecurring,
  IBookingPut,
  IBookingDelete,
  IBookingOwnData,
  IBookingOneTime,
  IBookingOneTimePut,
  IBookingOneTimeDelete,
  IBookingOwn,
  PatternType,
  PatternKind,
  DaysOfEveryNWeeksType,
  EveryNDayType,
  XDayOfEveryNMonthType,
  GetAllBookingsResponse,
  SingleBooking,
  ExtendedSingleBooking,
  ExtendedSingleISOBooking,
  IBookingOneTimePutEdited,
};
