import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';

import authSlice from './features/authSlice';
import bookingSlice from './features/bookingSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  bookings: bookingSlice,
});

const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore['dispatch'];

export type { RootState, AppStore, AppDispatch };
export { setupStore };
