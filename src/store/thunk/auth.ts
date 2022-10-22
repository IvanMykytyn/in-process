import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import type {
  UserLoginProps,
  ErrorMessageObject,
  UserSignUpProps,
  UserEmailField,
  UserWithToken,
} from 'models';
import { userService, loginRequest } from 'services';
import { clearStore } from 'store/features/authSlice';
import { AppDispatch } from 'store';

export const loginUser = createAsyncThunk<
  UserWithToken,
  UserLoginProps,
  {
    rejectValue: ErrorMessageObject;
  }
>('auth/loginUser', async (userData, { rejectWithValue }) => {
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

export const signUpUser = createAsyncThunk<
  UserWithToken,
  UserSignUpProps,
  {
    rejectValue: ErrorMessageObject;
  }
>('auth/signUpUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await userService.signUpRequest(userData);
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
export const getAccessUser = createAsyncThunk<
  UserWithToken,
  UserEmailField,
  {
    rejectValue: ErrorMessageObject;
  }
>('auth/getAccessUser', async ({ email }, { rejectWithValue }) => {
  try {
    const response = await userService.getAccessRequest({ email });
    return response.data;
  } catch (err) {
    const error = err as AxiosError<ErrorMessageObject>;

    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const logoutUser = createAsyncThunk<
  undefined,
  undefined,
  {
    rejectValue: string;
    dispatch?: AppDispatch;
  }
>('auth/logoutUser', async (_, thunkAPI) => {
  try {
    thunkAPI.dispatch(clearStore());
  } catch (err) {
    const error = err as AxiosError<ErrorMessageObject>;

    if (!error.response) {
      throw err;
    }
    return thunkAPI.rejectWithValue('Logout failed');
  }
});
