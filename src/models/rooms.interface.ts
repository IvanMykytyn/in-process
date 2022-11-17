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
    equipment: InstrumentsProps[]
}

export interface Room {
    id: string;
    name: string;
    description: string;
};