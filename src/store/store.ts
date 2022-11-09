import { configureStore } from '@reduxjs/toolkit';

import authSlice from './features/authSlice';
import bookingSlice from './features/bookingSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    booking: bookingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
