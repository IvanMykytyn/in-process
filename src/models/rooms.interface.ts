export interface InstrumentsProps {
    id: string
};

export interface IRooms{
    id: number,
    name: string,
    img: string,
    description: string,
    floor: number,
    maxCapacity: number,
    office:  number,
    equipment: InstrumentsProps[]
}