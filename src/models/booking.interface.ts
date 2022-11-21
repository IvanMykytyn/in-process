import {IUserOwn, UserInterface} from './user.interface';
import {IRooms} from "./rooms.interface";

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
    users: string[]
}

interface IBookingPut {
    scheduleId: number;
    name: string;
    description: string;
    roomId: string;
    usersIds: [
        null
    ]
}

interface IBookingDelete {
    scheduleId: number
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
  room: IRooms
};

interface IBookingOwn{
  data: IBookingOwnData[];
  page: string;
  limit: string;
  totalCount: number;
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

export type {
    BookingInterface,
    IBookingRecurring,
    IBookingPut,
    IBookingDelete,
    IBookingOneTime,
    IBookingOneTimePut,
    IBookingOneTimeDelete,
    IBookingOwn,
    PatternType,
    PatternKind,
    DaysOfEveryNWeeksType,
    EveryNDayType,
    XDayOfEveryNMonthType,
};

