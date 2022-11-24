import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  IBookingRecurring,
  IBookingPut,
  IBookingDelete,
  IBookingOneTime,
  IBookingOneTimePut,
  IBookingOwn,
  GetAllBookingsResponse,
  ErrorMessageObject,
} from 'models';
import { bookingService } from 'services';

export type GetAllBookings = GetAllBookingsResponse['data']['bookings'];

export const getAllBookings = createAsyncThunk<
  GetAllBookings,
  { startDate: string; endDate: string; officeId: number; roomId?: string }
>(
  'bookingSlice/getAllBookings',
  async ({ startDate, endDate, officeId, roomId }, { rejectWithValue }) => {
    try {
      const { data } = await bookingService.getAllBookings(
        startDate,
        endDate,
        officeId,
        roomId
      );
      return data.data.bookings;
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.response?.data);
    }
  }
);

export const recPost = createAsyncThunk<
  IBookingRecurring,
  { booking: IBookingRecurring },
  {
    rejectValue: ErrorMessageObject;
  }
>('bookingSlice/recPost', async ({ booking }, { rejectWithValue }) => {
  try {
    const { data } = await bookingService.recurringPost(booking);
    return data;
  } catch (err) {
    const error = err as AxiosError<ErrorMessageObject>;

    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const recPut = createAsyncThunk<
  IBookingPut,
  { scheduleId: number; newBooking: IBookingPut }
>('bookingSlice/recPut', async ({ scheduleId, newBooking }, { rejectWithValue }) => {
  try {
    const { data } = await bookingService.recurringPut(scheduleId, newBooking);
    return data;
  } catch (e) {
    const err = e as AxiosError;
    return rejectWithValue(err.response?.data);
  }
});

export const recDelete = createAsyncThunk<
  { scheduleId: number },
  { scheduleId: number }
>('bookingSlice/recDelete', async ({ scheduleId }, { rejectWithValue }) => {
  try {
    await bookingService.recurringDelete(scheduleId);
    return { scheduleId };
  } catch (e) {
    const err = e as AxiosError;
    return rejectWithValue(err.response?.data);
  }
});

export const oneTimePost = createAsyncThunk<
  IBookingOneTime,
  { booking: IBookingOneTime },
  {
    rejectValue: ErrorMessageObject;
  }
>('bookingSlice/oneTimePost', async ({ booking }, { rejectWithValue }) => {
  try {
    const { data } = await bookingService.postBookingOneTime(booking);
    return data;
  } catch (err) {
    const error = err as AxiosError<ErrorMessageObject>;

    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const oneTimeDelete = createAsyncThunk<
  { bookingId: number },
  { bookingId: number }
>('bookingSlice/oneTimeDelete', async ({ bookingId }, { rejectWithValue }) => {
  try {
    await bookingService.deleteBookingOneTime(bookingId);
    return { bookingId };
  } catch (e) {
    const err = e as AxiosError;
    return rejectWithValue(err.response?.data);
  }
});

export const oneTimePut = createAsyncThunk<
  IBookingOneTimePut,
  { bookingId: number; newBooking: IBookingOneTimePut }
>(
  'bookingSlice/oneTimePut',
  async ({ bookingId, newBooking }, { rejectWithValue }) => {
    try {
      const { data } = await bookingService.putBookingOneTime(bookingId, newBooking);
      return data;
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.response?.data);
    }
  }
);

export const getAllOwnBookings = createAsyncThunk<
  IBookingOwn,
  { page: number; limit: number }
>('bookingSlice/getAllOwnBookings', async ({ page, limit }, { rejectWithValue }) => {
  try {
    const { data } = await bookingService.getBookingOwn(page, limit);
    return data;
  } catch (e) {
    const err = e as AxiosError;
    return rejectWithValue(err.response?.data);
  }
});
