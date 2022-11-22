export interface InstrumentsProps {
    id: number,
    name: string
};

export interface IRooms {
    id: number,
    name: string,
    description: string,
    floor: number,
    maxCapacity: number,
    currentBooking: [],
    equipments: InstrumentsProps[]
};

export interface Room {
    id: string;
    name: string;
    description: string;
};

export interface IUsers{
            id: number,
            firstName: string,
            lastName: string,
            email: string
};

export interface ICreator{
    id: number,
    firstName: string,
    lastName: string,
    email: string
};

export interface ISoonestBookings{
    id: number;
    start: string;
    end: string;
    name: string;
    description: string;
    users: IUsers[],
    creator: ICreator
};

export interface IRoomsWithSoonestBookings extends IRooms{
    soonestBookings: ISoonestBookings[]
}