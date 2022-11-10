import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Booking } from 'models';
import type { RootState } from 'store';
import { bookings } from 'utils';

interface BookingState {
  isLoading: boolean;
  bookings: Array<Booking>;
  isSideBarOpen: boolean;
}

const initialState: BookingState = {
  isSideBarOpen: true,
  isLoading: false,
  bookings: bookings,
};

export const bookingSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    removeBooking: (state, { payload }: PayloadAction<number>) => {
      state.bookings = state.bookings.filter((booking) => booking.id !== payload);
    },
  },
});

export const { toggleSideBar, removeBooking } = bookingSlice.actions;
export const selectBooking = (state: RootState) => state.booking;

export default bookingSlice.reducer;
