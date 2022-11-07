import { createSlice } from '@reduxjs/toolkit';
import { Booking } from 'models';
import type { RootState } from 'store';
import { bookings } from 'utils';

interface BookingState {
  isLoading: boolean;
  bookings: Array<Booking>;
}

const initialState: BookingState = {
  isLoading: false,
  bookings: bookings,
};

export const bookingSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearStore: (state) => {},
  },
});

export const { clearStore } = bookingSlice.actions;
export const selectBooking = (state: RootState) => state.booking;

export default bookingSlice.reducer;
