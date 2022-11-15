import {createSlice} from "@reduxjs/toolkit";

import {IBookingRecurring, IRooms} from "../../models";
import {getAll} from "../thunk";
import {recurringPost} from '../store';

interface IBooking {
  booking: IBookingRecurring | null;
};

const initialState: IBooking = {
  booking: null
};

const bookingSlice = createSlice({
  name: 'bookingSlice',
  initialState,
  reducers: {},
  extraReducers: builder =>
      builder
          .addCase(recurringPost.fulfilled, (state, action) => {
            state.booking = action.payload.id
          })

});

const {reducer: bookingReducer} = bookingSlice;

const bookingActions = {
  recurringPost
};

export {
  bookingReducer,
  bookingActions
};































// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { BookingInterface } from 'models';
// import { EventProps } from 'pages/Dashboard/Calendar/constants';
// import type { RootState } from 'store';
// import { bookings } from 'utils';
//
// interface BookingState {
//   isLoading: boolean;
//   isSideBarOpen: boolean;
//   isPopoverOpen: boolean;
//
//   bookings: Array<BookingInterface>;
//   currentBooking: EventProps | null;
// }
//
// const initialState: BookingState = {
//   isLoading: false,
//   isSideBarOpen: true,
//   isPopoverOpen: false,
//
//   bookings: bookings,
//   currentBooking: null,
//
// };
//
// export const bookingSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     toggleSideBar: (state) => {
//       state.isSideBarOpen = !state.isSideBarOpen;
//     },
//     removeBooking: (state, { payload }: PayloadAction<number>) => {
//       state.bookings = state.bookings.filter((booking) => booking.id !== payload);
//     },
//     togglePopover: (state) => {
//       state.isPopoverOpen = !state.isPopoverOpen;
//     },
//     setCurrentBooking: (state, { payload }: PayloadAction<EventProps>) => {
//       state.currentBooking = payload;
//
//     },
//   },
// });
//
// export const { toggleSideBar, removeBooking, togglePopover, setCurrentBooking } =
//
//   bookingSlice.actions;
// export const selectBooking = (state: RootState) => state.booking;
//
// export default bookingSlice.reducer;
