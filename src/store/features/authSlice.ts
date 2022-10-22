import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'store';

// thunk
import { loginUser, getAccessUser, signUpUser, logoutUser } from 'store/thunk';

import { addToLocalStorage, removeFromLocalStorage } from 'utils';
import { NotifyService } from 'services';
import { User } from 'models';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearStore: (state) => {
      state.user = null;
      removeFromLocalStorage('token');
    },
  },
  extraReducers: (builder) => {
    // Login
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      const { access_token, ...restUserData } = payload;
      state.user = restUserData;
      addToLocalStorage('token', payload.access_token);
      NotifyService.success(`Welcome Back ${state.user?.firstName}`);
      state.isLoading = false;
    });

    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.isLoading = false;

      state.error = payload?.message ?? 'Something went Wrong';
      NotifyService.error(state.error);
    });

    // Sign Up
    builder.addCase(signUpUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(signUpUser.fulfilled, (state, { payload }) => {
      const { access_token, ...restUserData } = payload;
      state.user = restUserData;
      addToLocalStorage('token', payload.access_token);

      NotifyService.success(`Hello There ${state.user?.firstName}`);
      state.isLoading = false;
    });

    builder.addCase(signUpUser.rejected, (state, { payload }) => {
      state.isLoading = false;

      state.error = payload?.message ?? 'Something went Wrong';
      NotifyService.error(state.error);
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
      state.error = payload?.message ?? 'Something went Wrong';
      NotifyService.error(state.error);
    });

    // logout
    builder.addCase(logoutUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(logoutUser.fulfilled, (state) => {
      state.isLoading = false;

      // TODO change message text
      NotifyService.success(`Successfully log out`);
    });

    builder.addCase(logoutUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload ?? 'Something went Wrong';
      NotifyService.error(state.error);
    });
  },
});

export const { clearStore } = authSlice.actions;
export const selectUser = (state: RootState) => state.auth;

export default authSlice.reducer;
