import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'store';
import { Id } from 'react-toastify';
import {
  ExtendedSingleBooking,
  ExtendedSingleISOBooking,
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
  GetAllBookings,
} from '../thunk';
import { NotifyService } from 'services';

interface BookingState {
  isLoading: boolean;
  isSideBarOpen: boolean;
  isPopoverOpen: boolean;

  bookingsOwn: IBookingOwn | null;
  bookingLoading: boolean;
  oneTimeLoading: boolean;
  ownLoading: boolean;

  bookings: GetAllBookings;
  currentBooking: ExtendedSingleISOBooking | null;

  notifyId: Id;
}

const initialBookingState: BookingState = {
  bookingsOwn: null,
  bookingLoading: false,
  oneTimeLoading: false,
  ownLoading: false,
  bookings: [],

  currentBooking: null,

  isLoading: false,
  isSideBarOpen: true,
  isPopoverOpen: false,

  notifyId: '',
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
    setCurrentBooking: (
      state,
      { payload }: PayloadAction<ExtendedSingleISOBooking>
    ) => {
      state.currentBooking = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // get all bookings
      .addCase(getAllBookings.pending, (state) => {
        state.bookingLoading = true;
      })
      .addCase(getAllBookings.fulfilled, (state, { payload }) => {
        state.bookingLoading = false;
        state.bookings = payload;
      })
      .addCase(getAllBookings.rejected, (state, { payload }) => {
        state.bookingLoading = false;
        console.log(payload);
      })

      // recurring post
      .addCase(recPost.pending, (state) => {
        state.notifyId = NotifyService.loading();
      })
      .addCase(recPost.fulfilled, (state, action) => {
        state.oneTimeLoading = false;

        NotifyService.update(state.notifyId, `Successfully booked`, 'success');
      })
      .addCase(recPost.rejected, (state, action) => {
        const error = 'Something went Wrong';
        NotifyService.update(state.notifyId, error, 'error');
        state.oneTimeLoading = false;
      })

      // recurring delete
      .addCase(recDelete.pending, (state) => {
        state.notifyId = NotifyService.loading();
      })
      .addCase(recDelete.fulfilled, (state, action) => {
        state.bookings = state.bookings.length > 0 ? [state.bookings[0]] : [];

        NotifyService.update(state.notifyId, `Successfully deleted`, 'success');
      })
      .addCase(recDelete.rejected, (state) => {
        const error = 'Something went Wrong';
        NotifyService.update(state.notifyId, error, 'error');
        state.oneTimeLoading = false;
      })

      // one time post
      .addCase(oneTimePost.pending, (state) => {
        state.oneTimeLoading = true;
        state.notifyId = NotifyService.loading();
      })
      .addCase(oneTimePost.fulfilled, (state, action) => {
        state.oneTimeLoading = false;

        NotifyService.update(state.notifyId, `Successfully booked`, 'success');
      })
      .addCase(oneTimePost.rejected, (state, { payload }) => {
        const error = 'Something went Wrong';
        NotifyService.update(state.notifyId, error, 'error');
        state.oneTimeLoading = false;
      })

      // one time delete
      .addCase(oneTimeDelete.pending, (state) => {
        state.notifyId = NotifyService.loading();
      })
      .addCase(oneTimeDelete.fulfilled, (state, action) => {
        state.bookings = state.bookings.filter(
          (booking) => booking.id !== action.payload.bookingId
        );
        NotifyService.update(state.notifyId, `Successfully deleted`, 'success');
      })
      .addCase(oneTimeDelete.rejected, (state) => {
        const error = 'Something went Wrong';
        NotifyService.update(state.notifyId, error, 'error');
        state.oneTimeLoading = false;
      })

      // get all own Bookings
      .addCase(getAllOwnBookings.pending, (state) => {
        state.ownLoading = true;
      })
      .addCase(getAllOwnBookings.fulfilled, (state, action) => {
        state.bookingsOwn = action.payload;
        state.ownLoading = false;
      });
  },
});

const {
  reducer: bookingReducer,
  actions: { toggleSideBar, removeBooking, togglePopover, setCurrentBooking },
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
  getAllOwnBookings,
};

export {
  bookingReducer,
  bookingActions,
  selectBooking,
  toggleSideBar,
  removeBooking,
  togglePopover,
  setCurrentBooking,
};
