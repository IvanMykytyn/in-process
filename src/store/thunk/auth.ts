import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';

import type {
    UserLoginProps,
    ErrorMessageObject,
    UserSignUpProps,
    UserEmailField,
    UserWithToken,
    ResetPasswordProps,
    UserInterface,
} from 'models';
import {
    loginRequest,
    signUpRequest,
    getAccessRequest,
    addUsersRequest,
    changePasswordRequest,
    forgotPasswordRequest,
    resetPasswordRequest,
    getMeRequest,
} from 'services';
import {authActions, clearStore} from 'store/slices/auth.slice';
import {AppDispatch} from 'store';

export const loginUser = createAsyncThunk<UserWithToken,
    UserLoginProps,
    {
        rejectValue: ErrorMessageObject;
    }>('authSlice/loginUser', async (userData, {rejectWithValue}) => {
    try {
        const response = await loginRequest(userData);
        return response.data;
    } catch (err) {
        const error = err as AxiosError<ErrorMessageObject>;

        if (!error.response) {
            throw err;
        }
        return rejectWithValue(error.response.data);
    }
});

export const signUpUser = createAsyncThunk<UserWithToken,
    UserSignUpProps,
    {
        rejectValue: ErrorMessageObject;
    }>('authSlice/signUpUser', async (userData, {rejectWithValue}) => {
    try {
        const response = await signUpRequest(userData);
        return response.data;
    } catch (err) {
        const error = err as AxiosError<ErrorMessageObject>;

        if (!error.response) {
            throw err;
        }
        return rejectWithValue(error.response.data);
    }
});

// change return type
export const getAccessUser = createAsyncThunk<void,
    UserEmailField,
    {
        rejectValue: ErrorMessageObject;
    }>('authSliceSlice/getAccessUser', async ({email}, {rejectWithValue}) => {
    try {
        const response = await getAccessRequest({email});
        return response.data;
    } catch (err) {
        const error = err as AxiosError<ErrorMessageObject>;

        if (!error.response) {
            throw err;
        }
        return rejectWithValue(error.response.data);
    }
});

export interface logoutUserNotifyProps {
    notify: boolean;
}

export const logoutUser = createAsyncThunk<logoutUserNotifyProps,
    boolean | undefined,
    {
        rejectValue: string;
        dispatch?: AppDispatch;
    }>('authSlice/logoutUser', async (notify = true, thunkAPI) => {
    try {
        thunkAPI.dispatch(clearStore());
        return {notify};
    } catch (err) {
        return thunkAPI.rejectWithValue('Logout failed');
    }
});

export const addUsers = createAsyncThunk<void,
    string[],
    {
        rejectValue: ErrorMessageObject;
    }>('authSlice/addUsers', async (users, {rejectWithValue}) => {
    try {
        await addUsersRequest(users);
    } catch (err) {
        const error = err as AxiosError<ErrorMessageObject>;

        if (!error.response) {
            throw err;
        }
        return rejectWithValue(error.response.data);
    }
});

export interface ChangePasswordProps {
    newPassword: string;
}

export const changePassword = createAsyncThunk<void,
    ChangePasswordProps,
    {
        rejectValue: ErrorMessageObject;
    }>('authSlice/changePassword', async ({newPassword}, {rejectWithValue}) => {
    try {
        const response = await changePasswordRequest({newPassword});
        return response.data;
    } catch (err) {
        const error = err as AxiosError<ErrorMessageObject>;

        if (!error.response) {
            throw err;
        }
        return rejectWithValue(error.response.data);
    }
});

export const forgotPassword = createAsyncThunk<void,
    UserEmailField,
    {
        rejectValue: ErrorMessageObject;
    }>('authSlice/forgotPassword', async ({email}, {rejectWithValue}) => {
    try {
        const response = await forgotPasswordRequest({email});
        return response.data;
    } catch (err) {
        const error = err as AxiosError<ErrorMessageObject>;

        if (!error.response) {
            throw err;
        }
        return rejectWithValue(error.response.data);
    }
});

export const resetPassword = createAsyncThunk<void,
    ResetPasswordProps,
    {
        rejectValue: ErrorMessageObject;
    }>('authSlice/resetPassword', async ({id, newPassword}, {rejectWithValue}) => {
    try {
        const response = await resetPasswordRequest({id, newPassword});
        return response.data;
    } catch (err) {
        const error = err as AxiosError<ErrorMessageObject>;

        if (!error.response) {
            throw err;
        }
        return rejectWithValue(error.response.data);
    }
});

export const getMe = createAsyncThunk<UserInterface,
    void,
    {
        rejectValue: ErrorMessageObject;
    }>('authSlice/getMe', async (_, {rejectWithValue}) => {
    try {
        const response = await getMeRequest();
        return response.data;
    } catch (err) {
        const error = err as AxiosError<ErrorMessageObject>;

        if (!error.response) {
            throw err;
        }
        return rejectWithValue(error.response.data);
    }
});
