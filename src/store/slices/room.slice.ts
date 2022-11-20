import { createSlice} from "@reduxjs/toolkit";

import {IRooms} from "models";
import { RootState } from "store/store";
import {getAllRooms } from '../thunk';

interface IRoom {
    rooms: IRooms[]
};

const initialRoomState: IRoom = {
    rooms: []
};

const roomSlice = createSlice({
    name: 'roomSlice/room',
    initialState: initialRoomState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAllRooms.fulfilled, (state, action) => {
                state.rooms = action.payload;
            })

});

const {reducer: roomReducer} = roomSlice;

const selectRooms = (state: RootState) => state.rooms;
const roomActions = {
    getAllRooms
};

export {
    roomReducer,
    roomActions,
    selectRooms,
    initialRoomState,
};