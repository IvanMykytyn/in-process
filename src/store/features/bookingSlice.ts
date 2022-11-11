import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Booking } from 'models';
import { EventProps } from 'pages/Dashboard/Calendar/constants';
import type { RootState } from 'store';
import { bookings } from 'utils';

interface BookingState {
  isLoading: boolean;
  bookings: Array<Booking>;
  isSideBarOpen: boolean;
  isPopoverOpen: boolean;
  anchorEl: HTMLButtonElement | null;
}

const initialState: BookingState = {
  isSideBarOpen: true,
  isPopoverOpen: false,
  isLoading: false,
  bookings: bookings,
  anchorEl: null,
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
    openPopover: (state) => {
      state.isPopoverOpen = !state.isPopoverOpen;
    },
    setAnchor: (state, { payload }: PayloadAction<HTMLButtonElement>) => {
      // if (!state.anchorEl) state.anchorEl = payload;
    },
  },
});

export const { toggleSideBar, removeBooking, openPopover, setAnchor } =
  bookingSlice.actions;
export const selectBooking = (state: RootState) => state.booking;

export default bookingSlice.reducer;
