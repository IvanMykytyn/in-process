import { createSlice } from "@reduxjs/toolkit"

interface IRoom {
    equipmentIds: number[],
    capacityRanges: Array<[
        number,
        number
    ]>
    filterItems: string[]
};

const initialState: IRoom = {
    equipmentIds: [],
    capacityRanges: [],
    filterItems: [],
};

const filterSlice = createSlice({
    name: 'filterSlice',
    initialState: initialState,
    reducers: {
        setEquipmentIds(state, action){
            const filterIndex = state.equipmentIds.indexOf(action.payload);
            if (filterIndex < 0) {
                state.equipmentIds = [...state.equipmentIds, action.payload];
            }else {
                state.equipmentIds = state.equipmentIds.filter((value) => value !== action.payload);
            }
        },
        setCapacityRanges(state,action){
            const filterIndex = state.capacityRanges.findIndex(range => range[0] === action.payload[0]);
            if (filterIndex < 0) {
                state.capacityRanges = [...state.capacityRanges, action.payload];
            }else {
                state.capacityRanges = state.capacityRanges.filter(range => range[0] !== action.payload[0]);
            }
        },
        setFilterItems: (state, action) => {
            state.filterItems = action.payload
        }
    }
});

export const { setEquipmentIds, setCapacityRanges, setFilterItems } = filterSlice.actions;

export default filterSlice.reducer;