import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EventProps } from 'pages/Dashboard/Calendar/constants';
import type { RootState } from 'store';
import { bookings } from 'utils';

import {
  BookingInterface,
  IBookingDelete,
  IBookingOneTime,
  IBookingOwn,
  IBookingPut,
  IBookingRecurring,
} from 'models';

import {
  getAllBookings,
  recPost,
  recPut,
  recDelete,
  oneTimePost,
  oneTimePut,
  oneTimeDelete,
  getAllOwnBookings,
} from '../thunk';


interface BookingState {
    isLoading: boolean;
    isSideBarOpen: boolean;
    isPopoverOpen: boolean;

    bookingsRecurring: IBookingRecurring[];
    bookingsOneTime: IBookingOneTime[];
    bookingsOwn: IBookingOwn | null;
    bookingForUpdate: IBookingPut | null;
    scheduleId: IBookingDelete | null;
    bookingLoading: boolean;
    oneTimeLoading: boolean;
    ownLoading: boolean;

    bookings: Array<BookingInterface>;
    currentBooking: EventProps | null;
}

const initialBookingState: BookingState = {
    bookingsRecurring: [],
    bookingsOneTime: [],
    bookingsOwn: null,
    bookingForUpdate: null,
    scheduleId: null,
    bookingLoading: false,
    oneTimeLoading: false,
    ownLoading: false,
    bookings: bookings,
    currentBooking: null,

    isLoading: false,
    isSideBarOpen: true,
    isPopoverOpen: false,
};

const bookingSlice = createSlice({
    name: 'bookingSlice',
    initialState: initialBookingState,
    reducers: {
        toggleSideBar: (state) => {
            state.isSideBarOpen = !state.isSideBarOpen;
        },
        removeBooking: (state, {payload}: PayloadAction<number>) => {
            state.bookings = state.bookings.filter((booking) => booking.id !== payload);
        },
        togglePopover: (state) => {
            state.isPopoverOpen = !state.isPopoverOpen;
        },
        setCurrentBooking: (state, {payload}: PayloadAction<EventProps>) => {
            state.currentBooking = payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getAllBookings.pending, (state) => {
                state.bookingLoading = true;
            })
            .addCase(recPost.pending, (state) => {
              // state.bookingsRecurring.push(action.payload);
            })
            .addCase(recPost.fulfilled, (state, action) => {
              // state.bookingsRecurring.push(action.payload);
              console.log(action);
            })
            .addCase(recPost.rejected, (state, action) => {
              // state.bookingsRecurring.push(action.payload);
              console.log(action);
            })
            .addCase(recPut.fulfilled, (state, action) => {
                const index = state.bookingsRecurring.findIndex(booking => booking.roomId === action.payload.scheduleId.toString());
                state.bookingsRecurring[index] = {...state.bookingsRecurring[index], ...action.payload};
            })
            .addCase(recDelete.fulfilled, (state, action) => {
                const index = state.bookingsRecurring.findIndex(booking => booking.roomId === action.payload.scheduleId.toString());
                state.bookingsRecurring.slice(index, 1);
            })
            .addCase(oneTimePost.pending, (state) => {
              state.oneTimeLoading = true;
            })
            .addCase(oneTimePost.fulfilled, (state, action) => {
              // state.bookingsOneTime.push(action.payload);
              console.log(action);
      
              state.oneTimeLoading = false;
            })
            .addCase(oneTimePost.rejected, (state, action) => {
              // state.bookingsOneTime.push(action.payload);
              console.log(action);
      
              state.oneTimeLoading = false;
            })
            .addCase(oneTimePut.fulfilled, (state, action) => {
                const index = state.bookingsRecurring.findIndex(booking => booking.roomId === action.payload.id.toString());
                state.bookingsRecurring[index] = {...state.bookingsRecurring[index], ...action.payload};
            })
            .addCase(oneTimeDelete.fulfilled, (state, action) => {
                const index = state.bookingsOneTime.findIndex(booking => booking.roomId === action.payload.bookingId.toString());
                state.bookingsRecurring.slice(index, 1);
            })
            .addCase(getAllOwnBookings.pending, (state) => {
                state.ownLoading = true;
            })
            .addCase(getAllOwnBookings.fulfilled, (state, action) => {
                state.bookingsOwn = action.payload;
                state.ownLoading = false;
            })
    }
});

const {
    reducer: bookingReducer,
    actions: {toggleSideBar, removeBooking, togglePopover, setCurrentBooking}
} = bookingSlice;

const selectBooking = (state: RootState) => state.bookings;

const bookingActions = {
    getAllBookings,
    recPost,
    recPut,
    recDelete,
    oneTimePost,
    oneTimeDelete,
    oneTimePut,
    getAllOwnBookings
};

export {
    bookingReducer,
    bookingActions,
    selectBooking,
    toggleSideBar,
    removeBooking,
    togglePopover,
    setCurrentBooking
};
