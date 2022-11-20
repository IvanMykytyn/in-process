import {createSlice} from "@reduxjs/toolkit";

import {IRooms} from "models";
import {getAllRooms} from '../thunk';

interface IRoom {
    rooms: IRooms[],
    filteredRooms: IRooms[]
};

const initialRoomState: IRoom = {
    rooms: [],
    filteredRooms: []
};

const roomSlice = createSlice({
    name: 'roomSlice',
    initialState: initialRoomState,
    reducers: {
        getFilteredRooms(state, action) {
            state.filteredRooms = action.payload;
            console.log(state.filteredRooms)
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllRooms.fulfilled, (state, action) => {
                state.rooms = action.payload;
                state.filteredRooms = action.payload;
            }),
});

const {reducer: roomReducer, actions: {getFilteredRooms}} = roomSlice;

const roomActions = {
    getAllRooms
};

export {
    roomReducer,
    roomActions,
    initialRoomState,
    getFilteredRooms
};