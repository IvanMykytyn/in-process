import {createSlice} from "@reduxjs/toolkit";

import {IRooms} from "models";
import { RootState } from "store/store";
import {getAllRooms } from '../thunk';

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

const selectRooms = (state: RootState) => state.rooms;
const roomActions = {
    getAllRooms
};

export {
    roomReducer,
    roomActions,
    selectRooms,
    initialRoomState,
    getFilteredRooms
};