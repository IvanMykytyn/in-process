import { createSlice } from "@reduxjs/toolkit"

interface IRoom {
    itemId: number[],
    capacityId: Array<[
        number,
        number
    ]>
};

const initialState: IRoom = {
    itemId: [],
    capacityId: []
};

const filterSlice = createSlice({
    name: 'filterSlice',
    initialState: initialState,
    reducers: {
        setItemId(state, action){
            const filterIndex = state.itemId.indexOf(action.payload);
            if (filterIndex < 0) {
                state.itemId = [...state.itemId, action.payload];
            }else {
                state.itemId = state.itemId.filter((value) => value !== action.payload);
            }
        },
        setCapacityId(state,action){
            const filterIndex = state.capacityId.indexOf(action.payload);
            if (filterIndex < 0) {
                state.capacityId = [...state.capacityId, action.payload];
            }else {
                state.capacityId = state.capacityId.filter((value) => value !== action.payload);
            }
        }
    }
});

export const { setItemId, setCapacityId}= filterSlice.actions;

export default filterSlice.reducer;