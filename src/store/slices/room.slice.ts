import { createSlice} from "@reduxjs/toolkit";

import {IRooms} from "models";
import {getAll} from '../thunk';

interface IRoom {
    rooms: IRooms[]
};

const initialState: IRoom = {
    rooms: []
};

const roomSlice = createSlice({
    name: 'roomSlice',
    initialState,
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
    roomActions
};