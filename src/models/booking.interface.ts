import {UserInterface} from './user.interface';

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
    start: string,
    end: string,
    until: string,
    pattern: {
        kind: string,
        weeks: 0
    },
    name: string,
    description: string,
    roomId: string,
    users: string[]
}

interface IBookingPut
{
    scheduleId: number,
    name: string,
    description: string,
    roomId: string,
    usersIds: [
        null
    ]
}
interface IBookingDelete{
    scheduleId: number
}

export type {
    BookingInterface,
    IBookingRecurring,
    IBookingPut,
    IBookingDelete
};
