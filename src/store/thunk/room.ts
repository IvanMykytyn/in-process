import {createAsyncThunk} from "@reduxjs/toolkit";
import {IRooms} from "../../models";
import {roomsService} from "../../services";
import {AxiosError} from "axios";

 export const getAll = createAsyncThunk<IRooms[], void>(
    'roomSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await roomsService.getAll();
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
);