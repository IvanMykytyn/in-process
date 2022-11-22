import {createSlice} from "@reduxjs/toolkit";

import {IRooms, IRoomsWithSoonestBookings, ISoonestBookings} from "models";
import {getAllRooms, getAllSoonestBookings} from '../thunk';
import {RootState} from "store/store";

interface IRoom {
    rooms: IRooms[];
    filteredRooms: IRooms[];
    soonestBookings: IRoomsWithSoonestBookings | null;
    isLoading: boolean;
}

const initialRoomState: IRoom = {
    rooms: [],
    filteredRooms: [],
    soonestBookings: null,
    isLoading: false
};

const roomSlice = createSlice({
    name: 'roomSlice',
    initialState: initialRoomState,
    reducers: {
        getFilteredRooms(state, action) {
            state.filteredRooms = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllRooms.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllRooms.fulfilled, (state, action) => {
                state.rooms = action.payload;
                state.filteredRooms = action.payload;
                state.isLoading = false;
            })
            .addCase(getAllSoonestBookings.fulfilled, (state, action) => {
                state.soonestBookings = action.payload;
            })

});

const {reducer: roomReducer, actions: {getFilteredRooms}} = roomSlice;

const selectRooms = (state: RootState) => state.rooms;
const roomActions = {
    getAllRooms,
    getAllSoonestBookings
};

export {
    roomReducer,
    roomActions,
    selectRooms,
    initialRoomState,
    getFilteredRooms
};