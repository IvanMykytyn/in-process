import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "store";
import { Id } from "react-toastify";
import { ExtendedSingleISOBooking, IBookingOwn } from "models";

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
} from "../thunk";
import { NotifyService } from "services";
import { formatErrorDate } from "utils";

interface BookingState {
  isLoading: boolean;
  isSideBarOpen: boolean;
  isPopoverOpen: boolean;

  bookingsOwn: IBookingOwn | null;
  isBookingLoading: boolean;
  oneTimeLoading: boolean;
  ownLoading: boolean;

  isEditing: boolean;
  editingBookingId: number;

  bookings: GetAllBookings;
  currentBooking: ExtendedSingleISOBooking | null;

  notifyId: Id;
  isSuccess: boolean;

  page: number;

  own: boolean;
}

const initialBookingState: BookingState = {
  bookingsOwn: null,
  isBookingLoading: false,
  oneTimeLoading: false,
  ownLoading: false,
  bookings: [],

  currentBooking: null,

  isLoading: false,
  isSideBarOpen: true,
  isPopoverOpen: false,
  isEditing: false,
  editingBookingId: NaN,

  isSuccess: false,

  page: 1,
  own: false,

  notifyId: "",
};

const bookingSlice = createSlice({
  name: "bookingSlice",
  initialState: initialBookingState,
  reducers: {
    toggleSideBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    removeBooking: (state, { payload }: PayloadAction<number>) => {
      state.bookings = state.bookings.filter(
        (booking) => booking.id !== payload
      );
    },
    togglePopover: (state) => {
      state.isPopoverOpen = !state.isPopoverOpen;
    },
    closePopover: (state) => {
      state.isPopoverOpen = false;
    },
    setCurrentBooking: (
      state,
      { payload }: PayloadAction<ExtendedSingleISOBooking>
    ) => {
      state.currentBooking = payload;
    },
    resetIsSuccess: (state) => {
      state.isSuccess = false;
    },
    setEditingId: (state, { payload }) => {
      state.isEditing = !!payload;
      state.editingBookingId = payload;
    },
    resetEditingId: (state) => {
      state.isEditing = false;
      state.editingBookingId = NaN;
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    toggleOwn: (state) => {
      state.own = !state.own
    }
  },
  extraReducers: (builder) => {
    builder
      // get all bookings
      .addCase(getAllBookings.pending, (state) => {
        state.isBookingLoading = true;
      })
      .addCase(getAllBookings.fulfilled, (state, { payload }) => {
        state.isBookingLoading = false;
        state.bookings = payload;
      })
      .addCase(getAllBookings.rejected, (state, { payload }) => {
        state.isBookingLoading = false;
      })

      // recurring post
      .addCase(recPost.pending, (state) => {
        state.isLoading = true;
        state.notifyId = NotifyService.loading();
        state.isSuccess = false;
      })
      .addCase(recPost.fulfilled, (state, action) => {
        state.oneTimeLoading = false;
        state.isSuccess = true;

        NotifyService.update(state.notifyId, `Successfully booked`, "success");
        state.isLoading = false
      })
      .addCase(recPost.rejected, (state, { payload }) => {
        const { message, statusCode } = payload || {};

        let error = message ?? "Something went Wrong";
        if (statusCode === 400 && !!message) {
          error = formatErrorDate(message);
        }

        NotifyService.update(
          state.notifyId,
          "The room for this date is already booked",
          "error",
          8000
        );
        state.isLoading = false;
      })

      // recurring delete
      .addCase(recDelete.pending, (state) => {
        state.notifyId = NotifyService.loading();
      })
      .addCase(recDelete.fulfilled, (state, action) => {
        state.bookings = state.bookings.filter(
          (booking) => booking?.schedule?.id !== action.payload.scheduleId
        );;

        NotifyService.update(state.notifyId, `Successfully deleted`, "success");
      })
      .addCase(recDelete.rejected, (state) => {
        const error = "Something went Wrong";
        NotifyService.update(state.notifyId, error, "error");
      })

      // one time post
      .addCase(oneTimePost.pending, (state) => {
        state.isSuccess = false;
        state.isLoading = true;
        state.notifyId = NotifyService.loading();
      })
      .addCase(oneTimePost.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;

        NotifyService.update(state.notifyId, `Successfully booked`, "success");
      })
      .addCase(oneTimePost.rejected, (state, { payload }) => {
        const { message, statusCode } = payload || {};

        let error = message ?? "Something went Wrong";
        if (statusCode === 400 && !!message) {
          error = formatErrorDate(message);
        }

        NotifyService.update(
          state.notifyId,
          "The room for this date is already booked",
          "error",
          8000
        );
        state.isLoading = false;
      })

      // one time put
      .addCase(oneTimePut.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.notifyId = NotifyService.loading();
      })
      .addCase(oneTimePut.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.editingBookingId = NaN;
        state.isEditing = false;
        NotifyService.update(state.notifyId, `Successfully Updated`, "success");
        state.isLoading = false
      })
      .addCase(oneTimePut.rejected, (state, { payload }) => {
        const { message, statusCode } = payload || {};
        let error = message ?? "Something went Wrong";
        
        if (statusCode === 400 && !!message) {
          error = formatErrorDate(message);
        }

        NotifyService.update(
          state.notifyId,
          "The room for this date is already booked",
          "error",
          8000
        );
        state.isLoading = false
      })

      // one time delete
      .addCase(oneTimeDelete.pending, (state) => {
        state.notifyId = NotifyService.loading();
      })
      .addCase(oneTimeDelete.fulfilled, (state, action) => {
        state.bookings = state.bookings.filter(
          (booking) => booking.id !== action.payload.bookingId
        );
        NotifyService.update(state.notifyId, `Successfully deleted`, "success");
      })
      .addCase(oneTimeDelete.rejected, (state) => {
        const error = "Something went Wrong";
        NotifyService.update(state.notifyId, error, "error");
        state.oneTimeLoading = false;
      })

      // get all own Bookings
      .addCase(getAllOwnBookings.pending, (state) => {
        if (state.bookingsOwn?.data.length === 0) {
          state.ownLoading = true;
        }
      })
      .addCase(getAllOwnBookings.fulfilled, (state, action) => {
        const updatedBookings = action.payload;
        if (state.bookingsOwn?.totalCount !== updatedBookings.data.length) {
          state.bookingsOwn = updatedBookings;
        }
        state.ownLoading = false;
      });
  },
});

const {
  reducer: bookingReducer,
  actions: {
    toggleSideBar,
    removeBooking,
    togglePopover,
    setCurrentBooking,
    resetIsSuccess,
    closePopover,
    setEditingId,
    setPage,
    resetEditingId,
    toggleOwn,
  },
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
  setEditingId,
  setPage,
  resetEditingId,
  toggleOwn,
};

export {
  bookingReducer,
  bookingActions,
  selectBooking,
  toggleSideBar,
  removeBooking,
  togglePopover,
  setCurrentBooking,
  resetIsSuccess,
  closePopover,
  initialBookingState,
};
