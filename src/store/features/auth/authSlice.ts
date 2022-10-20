import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'store';

// thunk
import { loginUser, getAccessUser, signUpUser } from './authThunk';

import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from 'utils/localStorage';
import { NotifyService } from 'services';
import { User } from 'models';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string;
}

const initialState: AuthState = {
  user: getUserFromLocalStorage(),
  isLoading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // PayloadAction<number>
    logout: (state) => {
      state.user = null;
      removeUserFromLocalStorage();
      NotifyService.success('User log out');
    },
  },
  extraReducers: (builder) => {
    // Login
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
      addUserToLocalStorage(payload);
      NotifyService.success(`Welcome Back ${state.user?.firstName}`);
    });

    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.isLoading = false;

      state.error = payload?.error ?? 'Something went Wrong';
      NotifyService.error(state?.error);
    });

    // Sign Up
    builder.addCase(signUpUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(signUpUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
      addUserToLocalStorage(payload);

      NotifyService.success(`Hello There ${state.user?.firstName}`);
    });

    builder.addCase(signUpUser.rejected, (state, { payload }) => {
      state.isLoading = false;

      state.error = payload?.error ?? 'Something went Wrong';
      NotifyService.error(state?.error);
    });

    // get Access
    builder.addCase(getAccessUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getAccessUser.fulfilled, (state) => {
      state.isLoading = false;
      // TODO change message text
      NotifyService.success(`We will send sign up link to your email`);
    });

    builder.addCase(getAccessUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload?.error ?? 'Something went Wrong';
      NotifyService.error(state?.error);
    });
  },
});

export const { logout } = authSlice.actions;
export const selectUser = (state: RootState) => state.auth;

export default authSlice.reducer;
