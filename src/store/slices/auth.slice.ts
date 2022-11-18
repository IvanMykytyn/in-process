import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from 'store';

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
} from 'store/thunk';

import {addToLocalStorage, removeFromLocalStorage} from 'utils';
import {NotifyService} from 'services';
import {UserInterface} from 'models';
import {Id} from 'react-toastify';

interface AuthState {
    user: UserInterface | null;
    isLoading: boolean;
    error: string;
    notifyId: Id;
}

const initialState: AuthState = {
    user: null,
    isLoading: false,
    error: '',
    notifyId: '',
};

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        clearStore: (state) => {
            state.user = null;
            removeFromLocalStorage('token');
        },
    },
    extraReducers: builder => {
        // Login
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;

                state.notifyId = NotifyService.loading();
            })

            .addCase(loginUser.fulfilled, (state, {payload}) => {
                const {access_token, ...restUserData} = payload;
                state.user = restUserData;
                addToLocalStorage('token', payload.access_token);

                state.isLoading = false;
                NotifyService.update(
                    state.notifyId,
                    `Welcome Back ${state.user?.firstName}`,
                    'success'
                );
            })

            .addCase(loginUser.rejected, (state, {payload}) => {
                state.isLoading = false;

                state.error = payload?.message ?? 'Something went Wrong';
                NotifyService.update(state.notifyId, state.error, 'error');
            })

            // Sign Up
            .addCase(signUpUser.pending, (state) => {
                state.isLoading = true;

                state.notifyId = NotifyService.loading();
            })

            .addCase(signUpUser.fulfilled, (state, {payload}) => {
                const {access_token, ...restUserData} = payload;
                state.user = restUserData;
                addToLocalStorage('token', payload.access_token);

                state.isLoading = false;
                NotifyService.update(
                    state.notifyId,
                    `Hello There ${state.user?.firstName}`,
                    'success'
                );
            })

            .addCase(signUpUser.rejected, (state, {payload}) => {
                state.isLoading = false;

                state.error = payload?.message ?? 'Something went Wrong';
                NotifyService.update(state.notifyId, state.error, 'error');
            })

            // get Access
            .addCase(getAccessUser.pending, (state) => {
                state.isLoading = true;

                state.notifyId = NotifyService.loading();
            })

            .addCase(getAccessUser.fulfilled, (state) => {
                state.isLoading = false;

                // TODO change message text
                NotifyService.update(state.notifyId, `TEXT MESSAGE`, 'success');
            })

            .addCase(getAccessUser.rejected, (state, {payload}) => {
                state.isLoading = false;
                state.error = payload?.message ?? 'Something went Wrong';
                NotifyService.update(state.notifyId, state.error, 'error');
            })

            // add Users Admin
            .addCase(addUsers.pending, (state) => {
                state.isLoading = true;

                state.notifyId = NotifyService.loading();
            })

            .addCase(addUsers.fulfilled, (state) => {
                state.isLoading = false;
                NotifyService.update(state.notifyId, `Users Successfully added`, 'success');
            })

            .addCase(addUsers.rejected, (state, {payload}) => {
                state.isLoading = false;
                state.error = payload?.message[0] ?? 'Add Users Failed.';
                NotifyService.update(state.notifyId, state.error, 'error');
            })

            // logout
            .addCase(logoutUser.pending, (state, {meta}) => {
                state.isLoading = true;

                const isNotify = meta.arg;
                if (isNotify) state.notifyId = NotifyService.loading();
            })

            .addCase(logoutUser.fulfilled, (state, {payload}) => {
                state.isLoading = false;

                const {notify} = payload;
                if (notify)
                    NotifyService.update(state.notifyId, `Successfully log out`, 'success');
            })

            .addCase(logoutUser.rejected, (state, {payload, meta}) => {
                state.isLoading = false;
                state.error = payload ?? 'Something went Wrong';

                const isNotify = meta.arg;
                if (isNotify) NotifyService.update(state.notifyId, state.error, 'error');
            })
            // change password
            .addCase(changePassword.pending, (state) => {
                state.isLoading = true;

                state.notifyId = NotifyService.loading();
            })

            .addCase(changePassword.fulfilled, (state, {payload}) => {
                state.isLoading = false;

                NotifyService.update(
                    state.notifyId,
                    `Password changed successfully`,
                    'success'
                );
            })

            .addCase(changePassword.rejected, (state, {payload}) => {
                state.isLoading = false;
                state.error = payload?.message ?? "Can't Change Password! Try Again Later";
                NotifyService.update(state.notifyId, state.error, 'error');
            })

            // forgot password
            .addCase(forgotPassword.pending, (state) => {
                state.isLoading = true;

                state.notifyId = NotifyService.loading();
            })

            .addCase(forgotPassword.fulfilled, (state, {payload}) => {
                state.isLoading = false;

                NotifyService.update(
                    state.notifyId,
                    `Instructions for changing the password have been sent to the mail`,
                    'success'
                );
            })

            .addCase(forgotPassword.rejected, (state, {payload}) => {
                state.isLoading = false;
                state.error = payload?.message ?? 'Error! Try Again Later';
                NotifyService.update(state.notifyId, state.error, 'error');
            })

            // reset password
            .addCase(resetPassword.pending, (state) => {
                state.isLoading = true;

                state.notifyId = NotifyService.loading();
            })
            .addCase(resetPassword.fulfilled, (state, {payload}) => {
                state.isLoading = false;

                NotifyService.update(
                    state.notifyId,
                    `Password changed successfully`,
                    'success'
                );
            })

            .addCase(resetPassword.rejected, (state, {payload}) => {
                state.isLoading = false;
                state.error = payload?.message ?? 'Error! Try Again Later';
                NotifyService.update(state.notifyId, state.error, 'error');
            })

            // get me
            .addCase(getMe.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(getMe.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.user = payload;
            })

            .addCase(getMe.rejected, (state, {payload}) => {
                state.isLoading = false;
                state.error = payload?.message ?? 'Error! Try Again Later';
            })
    },
});


const {reducer: authReducer, actions: {clearStore}} = authSlice;

const selectUser = (state: RootState) => state.auth;

const authActions = {
    loginUser,
    getAccessUser,
    signUpUser,
    logoutUser,
    addUsers,
    changePassword,
    forgotPassword,
    resetPassword,
    getMe
};

export {
    authReducer,
    authActions,
    selectUser,
    clearStore
};
