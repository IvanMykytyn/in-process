import {createAsyncThunk} from "@reduxjs/toolkit";
import {IRooms, IRoomsWithSoonestBookings } from "../../models";
import {roomsService} from "../../services";
import {AxiosError} from "axios";

 export const getAllRooms = createAsyncThunk<IRooms[], {officeId :number}>(
    'roomSlice/getAllRooms',
    async ({officeId}, {rejectWithValue}) => {
        try {
            const {data} = await roomsService.getAll(officeId);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
);

 export const getAllSoonestBookings = createAsyncThunk<IRoomsWithSoonestBookings, {roomId :number, soonestBookingsDays:number}>(
    'roomSlice/getAllSoonestBookings',
    async ({roomId ,soonestBookingsDays}, {rejectWithValue}) => {
        try {
            const {data} = await roomsService.getAllSoonestBookings(roomId, soonestBookingsDays);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
);
