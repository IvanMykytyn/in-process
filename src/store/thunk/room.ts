import {createAsyncThunk} from "@reduxjs/toolkit";
import {IRooms} from "../../models";
import {roomsService} from "../../services";
import {AxiosError} from "axios";

 export const getAllRooms = createAsyncThunk<IRooms[], {officeId :number, soonestBookingsDays?:number, capacity?: number, items?: number }>(
    'roomSlice/getAllRooms',
    async ({officeId ,soonestBookingsDays, items, capacity}, {rejectWithValue}) => {
        try {
            const {data} = await roomsService.getAll(officeId ,soonestBookingsDays, items, capacity);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
);