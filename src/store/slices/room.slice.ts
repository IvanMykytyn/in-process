import { createSlice} from "@reduxjs/toolkit";

import {IRooms} from "models";
import {getAllRooms} from '../thunk';

interface IRoom {
    rooms: IRooms[]
};

const initialRoomState: IRoom = {
    rooms: []
};

const roomSlice = createSlice({
    name: 'roomSlice',
    initialState: initialRoomState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAllRooms.fulfilled, (state, action) => {
                state.rooms = action.payload;
            })

});

const {reducer: roomReducer} = roomSlice;

const roomActions = {
    getAllRooms
};

export {
    roomReducer,
    roomActions,
    initialRoomState,
};