import {combineReducers, configureStore} from '@reduxjs/toolkit';

import authSlice from './slices/auth.slice';
import {bookingReducer} from './slices';
import {roomReducer} from "./slices";

const rootReducer = combineReducers({
    auth: authSlice,
    booking: bookingReducer,
    rooms: roomReducer,
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

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