import {
  AnyAction,
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";

import authSlice from "./slices/auth.slice";
import { bookingReducer, roomReducer, themeReducer } from "./slices";
import filterSlice from "./slices/filter.slice";
import { logoutUser } from "./thunk";

const rootReducer = combineReducers({
  auth: authSlice,
  bookings: bookingReducer,
  rooms: roomReducer,
  filterRoom: filterSlice,
  themes: themeReducer,
});

// const rootReducer = (
//   state: ReturnType<typeof appReducer> | undefined,
//   action: AnyAction
// ) => {
//   if (action.type === `${logoutUser.typePrefix}/fulfilled`) {
//     return appReducer(undefined, { type: undefined });
//   }
//   return appReducer(state, action);
// };

const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore["dispatch"];

export type { RootState, AppStore, AppDispatch };

export { setupStore };
