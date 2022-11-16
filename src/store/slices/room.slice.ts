import { createSlice} from "@reduxjs/toolkit";

import {IRooms} from "models";
import {getAll} from '../thunk';

interface IRoom {
    rooms: IRooms[]
};

const initialRoomState: IRoom = {
    rooms: []
};

const roomSlice = createSlice({
    name: 'room',
    initialState: initialRoomState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.rooms = action.payload
            })

});

const {reducer: roomReducer} = roomSlice;

const roomActions = {
    getAll
};

export {
    roomReducer,
    roomActions,
    initialRoomState,
};