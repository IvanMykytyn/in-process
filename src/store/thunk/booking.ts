import {createAsyncThunk} from "@reduxjs/toolkit";
import {IBookingRecurring, IBookingPut, IBookingDelete} from "../../models";
import {bookingService} from "../../services";
import {AxiosError} from "axios";

export const getAllBookings = createAsyncThunk<IBookingRecurring[], {startDate: string, endDate: string, officeId: number, roomId?: string}>(
    'bookingSlice/getAll',
    async ({startDate, endDate, officeId, roomId}, {rejectWithValue}) => {
        try {
            const {data} = await bookingService.getAllBookings(startDate, endDate, officeId, roomId);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
);
export const recPost = createAsyncThunk<IBookingRecurring, {booking:IBookingRecurring}>(
    'bookingSlice/recPost',
    async ({booking}, {rejectWithValue}) => {
        try {
            const {data} = await bookingService.recurringPost(booking);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
);
export const recPut = createAsyncThunk<IBookingPut, {scheduleId: number, newBooking:IBookingPut}>(
    'bookingSlice/recPut',
    async ({scheduleId,newBooking}, {rejectWithValue}) => {
        try {
            const {data} = await bookingService.recurringPut(scheduleId, newBooking);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
);
export const recDelete = createAsyncThunk<IBookingDelete, {scheduleId: number}>(
    'bookingSlice/recPut',
    async ({scheduleId}, {rejectWithValue}) => {
        try {
            const {data} = await bookingService.recurringDelete(scheduleId);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
);
