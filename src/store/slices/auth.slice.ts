import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'store';

// thunk
import {
  loginUser,
  getAccessUser,
  signUpUser,
  logoutUser,
  addUsers,
  changePassword,
  forgotPassword,
  resetPassword,
  getMe,
  updateMe,
} from 'store/thunk';

import { setToLocalStorage, removeFromLocalStorage } from 'utils';
import { NotifyService } from 'services';
import { UserInterface } from 'models';
import { Id } from 'react-toastify';

interface AuthState {
  user: UserInterface | null;
  isLoading: boolean;
  error: string;
  notifyId: Id;
}
const initialUserState: AuthState = {
  user: null,
  isLoading: false,
  error: '',
  notifyId: '',
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState: initialUserState,
  reducers: {
    clearUser: (state) => {
      state.user = null;
      state.error = '';
      removeFromLocalStorage('token');
    },
  },
  extraReducers: (builder) => {
    // Login
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;

      state.notifyId = NotifyService.loading();
    });

    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      const { access_token, ...restUserData } = payload;
      state.user = restUserData;
      setToLocalStorage('token', payload.access_token);

      state.isLoading = false;
      NotifyService.update(
        state.notifyId,
        `Welcome Back ${state.user?.firstName}`,
        'success'
      );
    });

    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.isLoading = false;

      state.error = payload?.message ?? 'Something went Wrong';
      NotifyService.update(state.notifyId, state.error, 'error');
    });

    // Sign Up
    builder.addCase(signUpUser.pending, (state) => {
      state.isLoading = true;

      state.notifyId = NotifyService.loading();
    });

    builder.addCase(signUpUser.fulfilled, (state, { payload }) => {
      const { access_token, ...restUserData } = payload;
      state.user = restUserData;
      setToLocalStorage('token', payload.access_token);

      state.isLoading = false;
      NotifyService.update(
        state.notifyId,
        `Hello There ${state.user?.firstName}`,
        'success'
      );
    });

    builder.addCase(signUpUser.rejected, (state, { payload }) => {
      state.isLoading = false;

      state.error = payload?.message ?? 'Something went Wrong';
      NotifyService.update(state.notifyId, state.error, 'error');
    });

    // get Access
    builder.addCase(getAccessUser.pending, (state) => {
      state.isLoading = true;

      state.notifyId = NotifyService.loading();
    });

    builder.addCase(getAccessUser.fulfilled, (state) => {
      state.isLoading = false;

      // TODO change message text
      NotifyService.update(state.notifyId, `TEXT MESSAGE`, 'success');
    });

    builder.addCase(getAccessUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload?.message ?? 'Something went Wrong';
      NotifyService.update(state.notifyId, state.error, 'error');
    });

    // add Users Admin
    builder.addCase(addUsers.pending, (state) => {
      state.isLoading = true;

      state.notifyId = NotifyService.loading();
      
    });

    builder.addCase(addUsers.fulfilled, (state) => {
      state.isLoading = false;
      NotifyService.update(state.notifyId, `Users Successfully added`, 'success');
    });

    builder.addCase(addUsers.rejected, (state, { payload }) => {
      state.isLoading = false;
      const errorMsg = payload?.message ?? 'Add Users Failed.';
      NotifyService.update(state.notifyId, errorMsg, 'error');
    });

    // logout
    builder.addCase(logoutUser.pending, (state, { meta }) => {
      state.isLoading = true;

      const isNotify = meta.arg;
      if (isNotify) state.notifyId = NotifyService.loading();
    });

    builder.addCase(logoutUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      localStorage.clear()
      const { notify } = payload;
      if (notify)
        NotifyService.update(state.notifyId, `Successfully log out`, 'success');
    });

    builder.addCase(logoutUser.rejected, (state, { payload, meta }) => {
      state.isLoading = false;
      state.error = payload ?? 'Something went Wrong';

      const isNotify = meta.arg;
      if (isNotify) NotifyService.update(state.notifyId, state.error, 'error');
    });

    // change password
    builder.addCase(changePassword.pending, (state) => {
      state.isLoading = true;

      state.notifyId = NotifyService.loading();
    });

    builder.addCase(changePassword.fulfilled, (state, { payload }) => {
      state.isLoading = false;

      NotifyService.update(
        state.notifyId,
        `Password changed successfully`,
        'success'
      );
    });

    builder.addCase(changePassword.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload?.message ?? "Can't Change Password! Try Again Later";
      NotifyService.update(state.notifyId, state.error, 'error');
    });

    // forgot password
    builder.addCase(forgotPassword.pending, (state) => {
      state.isLoading = true;

      state.notifyId = NotifyService.loading();
    });

    builder.addCase(forgotPassword.fulfilled, (state, { payload }) => {
      state.isLoading = false;

      NotifyService.update(
        state.notifyId,
        `Instructions for changing the password have been sent to the mail`,
        'success'
      );
    });

    builder.addCase(forgotPassword.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload?.message ?? 'Error! Try Again Later';
      NotifyService.update(state.notifyId, state.error, 'error');
    });

    // reset password
    builder.addCase(resetPassword.pending, (state) => {
      state.isLoading = true;

      state.notifyId = NotifyService.loading();
    });

    builder.addCase(resetPassword.fulfilled, (state, { payload }) => {
      state.isLoading = false;

      NotifyService.update(
        state.notifyId,
        `Password changed successfully`,
        'success'
      );
    });

    builder.addCase(resetPassword.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload?.message ?? 'Error! Try Again Later';
      NotifyService.update(state.notifyId, state.error, 'error');
    });

    // get me
    builder.addCase(getMe.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getMe.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
    });

    builder.addCase(getMe.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload?.message ?? 'Error! Try Again Later';
    });

    // update me
    builder.addCase(updateMe.pending, (state) => {
      state.isLoading = true;

      state.notifyId = NotifyService.loading();
    });

    builder.addCase(updateMe.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      const { firstName, lastName } = payload[0];

      if (state.user) {
        state.user = { ...state.user, firstName, lastName };
        NotifyService.update(
          state.notifyId,
          `Name successfully changed`,
          'success'
        );
      }
    });

    builder.addCase(updateMe.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload?.message ?? 'Error! Try Again Later';
      NotifyService.update(state.notifyId, state.error, 'error');
    });
  },
});

export const { clearUser } = authSlice.actions;
export const selectUser = (state: RootState) => state.auth;

export { initialUserState };
export type { AuthState };

export default authSlice.reducer;
