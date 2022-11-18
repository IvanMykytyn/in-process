import {AxiosError} from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

import {
    IBookingRecurring,
    IBookingPut,
    IBookingDelete,
    IBookingOneTime,
    IBookingOneTimePut,
    IBookingOneTimeDelete,
    IBookingOwn
} from "../../models";

import {bookingService} from "../../services";

export const getAllBookings = createAsyncThunk<IBookingRecurring[], { startDate: string, endDate: string, officeId: number, roomId?: string }>(
    'bookingSlice/getAllBookings',
    async ({startDate, endDate, officeId, roomId}, {rejectWithValue}) => {
        try {
            const {data} = await bookingService.getAllBookings(startDate, endDate, officeId, roomId);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

export const recPost = createAsyncThunk<IBookingRecurring, { booking: IBookingRecurring }>(
    'bookingSlice/recPost',
    async ({booking}, {rejectWithValue}) => {
        try {
            const {data} = await bookingService.recurringPost(booking);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

export const recPut = createAsyncThunk<IBookingPut, { scheduleId: number, newBooking: IBookingPut }>(
    'bookingSlice/recPut',
    async ({scheduleId, newBooking}, {rejectWithValue}) => {
        try {
            const {data} = await bookingService.recurringPut(scheduleId, newBooking);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

export const recDelete = createAsyncThunk<IBookingDelete, { scheduleId: number }>(
    'bookingSlice/recDelete',
    async ({scheduleId}, {rejectWithValue}) => {
        try {
            const {data} = await bookingService.recurringDelete(scheduleId);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

export const oneTimePost = createAsyncThunk<IBookingOneTime, { booking: IBookingOneTime }>(
    'bookingSlice/oneTimePost',
    async ({booking}, {rejectWithValue}) => {
        try {
            const {data} = await bookingService.postBookingOneTime(booking);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

export const oneTimeDelete = createAsyncThunk<IBookingOneTimeDelete, { bookingId: number }>(
    'bookingSlice/oneTimeDelete',
    async ({bookingId}, {rejectWithValue}) => {
        try {
            const {data} = await bookingService.deleteBookingOneTime(bookingId);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

export const oneTimePut = createAsyncThunk<IBookingOneTimePut, { bookingId: number, newBooking: IBookingOneTimePut }>(
    'bookingSlice/oneTimePut',
    async ({bookingId, newBooking}, {rejectWithValue}) => {
        try {
            const {data} = await bookingService.putBookingOneTime(bookingId, newBooking);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

export const getAllOwnBookings = createAsyncThunk<IBookingOwn[], { page: number, limit: number }>(
    'bookingSlice/getAllOwnBookings',
    async ({page, limit}, {rejectWithValue}) => {
        try {
            const {data} = await bookingService.getBookingOwn(page, limit);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);