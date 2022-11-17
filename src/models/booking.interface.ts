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
    until: string;
    pattern: {
        kind: string;
        weeks: 0
    };
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

interface IBookingOwn {
    id: number;
    start: string;
    end: string;
    name: string;
    description: string;
    users: IUserOwn[];
    creator: IUserOwn;
    room: IRooms
};

export type {
    BookingInterface,
    IBookingRecurring,
    IBookingPut,
    IBookingDelete,
    IBookingOneTime,
    IBookingOneTimePut,
    IBookingOneTimeDelete,
    IBookingOwn
};
