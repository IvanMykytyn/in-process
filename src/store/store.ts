import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {authReducer} from './slices';
import {bookingReducer} from './slices';
import {roomReducer} from "./slices";

const rootReducer = combineReducers({
    auth: authReducer,
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