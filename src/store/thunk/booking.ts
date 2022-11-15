import {createAsyncThunk} from "@reduxjs/toolkit";
import {IBookingRecurring} from "../../models";
import {bookingService} from "../../services";
import {AxiosError} from "axios";

export const recurringPost = createAsyncThunk<IBookingRecurring, void>(
    'bookingSlice/recurringPost',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await bookingService.recurringPost(id);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
);