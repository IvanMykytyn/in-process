import {EquipmentsProps, CapacityRangeProps} from "models";

export const capacityFilter: CapacityRangeProps[] = [
    {
        id: 0,
        name: '1-10',
        range: [1, 10]
    },
    {
        id: 1,
        name: '11-20',
        range: [11, 20]
    },
    {
        id: 2,
        name: '21-30',
        range: [21, 30]
    }
]
export const equipmentsFilter: EquipmentsProps[] = [
    {
        id: 0,
        name: 'board'
    },
    {
        id: 1,
        name: 'tv'
    },
    {
        id: 2,
        name: 'marker'
    },
    {
        id: 3,
        name: 'sockets'
    },
    {
        id: 4,
        name: 'window'
    },
    {
        id: 5,
        name: 'conditioner'
    }
]
