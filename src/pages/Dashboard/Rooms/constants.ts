import {EquipmentsProps, CapacityRangeProps} from "models";

export const capacityFilter: CapacityRangeProps[] = [
    {
        id: 0,
        name: '1-2',
        range: [1, 2]
    },
    {
        id: 1,
        name: '3-6',
        range: [3, 6]
    },
    {
        id: 2,
        name: '7+',
        range: [7, 200]
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
