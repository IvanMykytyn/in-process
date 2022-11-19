import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EventProps } from 'pages/Dashboard/Calendar/constants';
import type { RootState } from 'store';
import { bookings } from 'utils';
import {BookingInterface, IBookingDelete, IBookingOneTime, IBookingOwn, IBookingPut, IBookingRecurring} from 'models';
import {
  recPost,
  recPut,
  recDelete,
  getAllBookings,
  oneTimePost,
  oneTimePut,
  oneTimeDelete,
  getAllOwnBookings
} from '../thunk';

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
  bookings: [],
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
    removeBooking: (state, { payload }: PayloadAction<number>) => {
      state.bookings = state.bookings.filter((booking) => booking.id !== payload);
    },
    togglePopover: (state) => {
      state.isPopoverOpen = !state.isPopoverOpen;
    },
    setCurrentBooking: (state, { payload }: PayloadAction<EventProps>) => {
      state.currentBooking = payload;
    },
  },
  extraReducers: builder => {
    builder
        .addCase(getAllBookings.pending, (state) => {
      state.bookingLoading = true;
    })
  }
});

export const { toggleSideBar, removeBooking, togglePopover, setCurrentBooking } =
  bookingSlice.actions;

export const selectBooking = (state: RootState) => state.bookings;

export { initialBookingState };
export type { BookingState };

export default bookingSlice.reducer;
