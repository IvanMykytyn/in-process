import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {BookingInterface, IBookingDelete, IBookingOneTime, IBookingOwn, IBookingPut, IBookingRecurring} from 'models';
import {EventProps} from 'pages/Dashboard/Calendar/constants';
import {
    recPost,
    recPut,
    recDelete,
    getAllBookings,
    oneTimePost,
    oneTimePut,
    oneTimeDelete,
    getAllOwnBookings
} from 'store';
import type {RootState} from 'store';
import {bookings} from 'utils';

interface BookingState {
    isLoading: boolean;
    isSideBarOpen: boolean;
    isPopoverOpen: boolean;

    bookingsRecurring: IBookingRecurring[];
    bookingsOneTime: IBookingOneTime[];
    bookingsOwn: IBookingOwn[];
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
    bookingsOwn: [],
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

export const bookingSlice = createSlice({
    name: 'bookingSlice/booking',
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
    extraReducers: (builder) => {
        builder
            .addCase(getAllBookings.pending, (state) => {
                state.bookingLoading = true;
            })
            .addCase(getAllBookings.fulfilled, (state, action) => {
                state.bookingsRecurring = action.payload;
                state.bookingLoading = false;
            })
            .addCase(recPost.fulfilled, (state, action) => {
                state.bookingsRecurring.push(action.payload);
            })
            .addCase(recPut.fulfilled, ((state, action) => {
                const index = state.bookingsRecurring.findIndex(booking => booking.roomId === action.payload.scheduleId.toString());
                state.bookingsRecurring[index] = {...state.bookingsRecurring[index], ...action.payload};
            }))
            .addCase(recDelete.fulfilled, ((state, action) => {
                const index = state.bookingsRecurring.findIndex(booking => booking.roomId === action.payload.scheduleId.toString());
                state.bookingsRecurring.slice(index, 1);
            }))
            .addCase(oneTimePost.pending, (state) => {
                state.oneTimeLoading = true;
            })
            .addCase(oneTimePost.fulfilled, (state, action) => {
                state.bookingsOneTime.push(action.payload);
                state.oneTimeLoading = false;
            })
            .addCase(oneTimePut.fulfilled, ((state, action) => {
                const index = state.bookingsRecurring.findIndex(booking => booking.roomId === action.payload.id.toString());
                state.bookingsRecurring[index] = {...state.bookingsRecurring[index], ...action.payload};
            }))
            .addCase(oneTimeDelete.fulfilled, ((state, action) => {
                const index = state.bookingsOneTime.findIndex(booking => booking.roomId === action.payload.bookingId.toString());
                state.bookingsRecurring.slice(index, 1);
            }))
            .addCase(getAllOwnBookings.pending, ((state) => {
                state.ownLoading = true;
            }))
            .addCase(getAllOwnBookings.fulfilled, ((state, action) => {
                state.bookingsOwn = action.payload;
                state.ownLoading = false;
            }))
    }
});

export const {toggleSideBar, removeBooking, togglePopover, setCurrentBooking} = bookingSlice.actions;

const {reducer: bookingReducer} = bookingSlice;

const bookingActions = {
    getAllBookings,
    recPost,
    recPut,
    recDelete,
    oneTimePost,
};

export const selectBooking = (state: RootState) => state.booking;

export {
    bookingActions,
    bookingReducer,
    initialBookingState
};

