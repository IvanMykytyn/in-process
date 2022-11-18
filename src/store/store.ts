import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';

import authSlice from './slices/auth.slice';
import {bookingReducer} from './slices/booking.slice';
import {roomReducer} from "./slices";

const rootReducer = combineReducers({
    auth: authSlice,
    booking: bookingReducer,
    rooms: roomReducer,
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

export type{
    RootState,
    AppStore,
    AppDispatch
};

export {
    setupStore
};
