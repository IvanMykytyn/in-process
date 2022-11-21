import {createAsyncThunk} from "@reduxjs/toolkit";
import {IRooms} from "../../models";
import {roomsService} from "../../services";
import {AxiosError} from "axios";

 export const getAllRooms = createAsyncThunk<IRooms[], {officeId :number, soonestBookingsDays?:number}>(
    'roomSlice/getAllRooms',
    async ({officeId ,soonestBookingsDays}, {rejectWithValue}) => {
        try {
            const {data} = await roomsService.getAll(officeId ,soonestBookingsDays);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
);