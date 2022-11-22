import {createSlice} from "@reduxjs/toolkit";

import {IRooms, IRoomsWithSoonestBookings, ISoonestBookings} from "models";
import {getAllRooms, getAllSoonestBookings} from '../thunk';

interface IRoom {
    rooms: IRooms[],
    filteredRooms: IRooms[],
    soonestBookings: IRoomsWithSoonestBookings | null,
};

const initialRoomState: IRoom = {
    rooms: [],
    filteredRooms: [],
    soonestBookings: null
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
            .addCase(getAllRooms.fulfilled, (state, action) => {
                state.rooms = action.payload;
                state.filteredRooms = action.payload;
            })
            .addCase(getAllSoonestBookings.fulfilled,(state, action) => {
                state.soonestBookings = action.payload;
            })

});

const {reducer: roomReducer, actions: {getFilteredRooms}} = roomSlice;

const roomActions = {
    getAllRooms,
    getAllSoonestBookings
};

export {
    roomReducer,
    roomActions,
    initialRoomState,
    getFilteredRooms
};