import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import type {
  UserLoginProps,
  ErrorMessageObject,
  UserSignUpProps,
  UserEmailField,
  UserWithToken,
} from 'models';
import {
  loginRequest,
  signUpRequest,
  getAccessRequest,
  addUsersRequest,
} from 'services';
import { clearStore } from 'store/slices/authSlice';
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
export const getAccessUser = createAsyncThunk<
  UserWithToken,
  UserEmailField,
  {
    rejectValue: ErrorMessageObject;
  }
>('auth/getAccessUser', async ({ email }, { rejectWithValue }) => {
  try {
    const response = await getAccessRequest({ email });
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
    return thunkAPI.rejectWithValue('Logout failed');
  }
});

export const addUsers = createAsyncThunk<
  void,
  string[],
  {
    rejectValue: ErrorMessageObject;
  }
>('auth/addUsers', async (users, { rejectWithValue }) => {
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
