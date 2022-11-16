import {createSlice} from "@reduxjs/toolkit";

import {IBookingRecurring, IBookingDelete, IBookingPut} from "../../models";
import {recPost, recPut, recDelete, getAllBookings} from 'store';

interface IBooking {
    bookings: IBookingRecurring[];
    bookingForUpdate: IBookingPut[];
    scheduleId: IBookingDelete | null;
};

const initialState: IBooking = {
    bookings: [],
    bookingForUpdate: [],
    scheduleId: null
};

const bookingSlice = createSlice({
    name: 'bookingSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAllBookings.fulfilled, (state, action) => {
                state.bookings = action.payload
            })
            .addCase(recPost.fulfilled, (state, action) => {
                state.bookings.push(action.payload)
            })
            .addCase(recPut.fulfilled, ((state, action) => {
                const index = state.bookings.findIndex(booking => booking.roomId === action.payload.scheduleId.toString());
                state.bookings[index] = {...state.bookings[index], ...action.payload}

            }))
            .addCase(recDelete.fulfilled, ((state, action) => {
                const index = state.bookingForUpdate.findIndex(booking => booking.roomId === action.payload.scheduleId.toString());
                state.bookings.slice(index, 1)
            }))
});

const {reducer: bookingReducer} = bookingSlice;

const bookingActions = {
    getAllBookings,
    recPost,
    recPut,
    recDelete
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
