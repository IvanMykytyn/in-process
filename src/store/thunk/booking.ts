import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  IBookingRecurring,
  IBookingPut,
  IBookingOneTime,
  IBookingOneTimePut,
  IBookingOwn,
  GetAllBookingsResponse,
  ErrorMessageObject,
  IBookingOneTimePutEdited,
} from 'models';
import { bookingService } from 'services';

export type GetAllBookings = GetAllBookingsResponse['data']['bookings'];

export const getAllBookings = createAsyncThunk<
  GetAllBookings,
  { startDate: string; endDate: string; officeId: number; roomId?: string, own?: boolean }
>(
  'bookingSlice/getAllBookings',
  async ({ startDate, endDate, officeId, roomId, own }, { rejectWithValue }) => {
    try {
      const { data } = await bookingService.getAllBookings(
        startDate,
        endDate,
        officeId,
        roomId,
        own,
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
  IBookingOneTimePutEdited,
  {
    rejectValue: ErrorMessageObject;
  }
>(
  'bookingSlice/oneTimePut',
  async (booking, { rejectWithValue }) => {
    try {
      const { data } = await bookingService.putBookingOneTime(booking);
      return data;
    } catch (err) {
      const error = err as AxiosError<ErrorMessageObject>;

      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllOwnBookings = createAsyncThunk<
  IBookingOwn,
  { page: number; limit: number, showSkeleton: boolean }
>('bookingSlice/getAllOwnBookings', async ({ page, limit, showSkeleton }, { rejectWithValue }) => {
  try {
    const { data } = await bookingService.getBookingOwn(page, limit);
    return data;
  } catch (e) {
    const err = e as AxiosError;
    return rejectWithValue(err.response?.data);
  }
});
