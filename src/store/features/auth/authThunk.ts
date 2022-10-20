import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import type {
  User,
  UserLoginProps,
  ErrorMessageObject,
  UserSignUpProps,
  UserEmailField,
  // UserUpdateProps,
} from 'models';

import {
  loginRequest,
  signUpRequest,
  // updateUserRequest,
  getAccessRequest,
} from 'services';
import { addUserToLocalStorage } from 'utils/localStorage';

// TODO Local storage

export const loginUser = createAsyncThunk<
  User,
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
  User,
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
  User,
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

// // TODO change return type
// export const updateUser = createAsyncThunk<
//   User,
//   UserUpdateProps,
//   {
//     rejectValue: ErrorMessageObject;
//   }
// >('auth/updateUser', async (userData, { rejectWithValue }) => {
//   try {
//     const response = await updateUserRequest(userData);
//     return response.data;
//   } catch (err) {
//     const error = err as AxiosError<ErrorMessageObject>;

//     if (!error.response) {
//       throw err;
//     }
//     return rejectWithValue(error.response.data);
//   }
// });
