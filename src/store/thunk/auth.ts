import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import type {
  UserLoginProps,
  ErrorMessageObject,
  UserSignUpProps,
  UserEmailField,
  UserWithToken,
  ResetPasswordProps,
  UserFields,
  UpdateMeResponse,
  ExtendedUserInterface,
} from "models";

import { userService, adminService } from "services";

import { clearUser } from "store/slices/auth.slice";

import { AppDispatch } from "store";

export const loginUser = createAsyncThunk<
  UserWithToken,
  UserLoginProps,
  {
    rejectValue: ErrorMessageObject;
  }
>("auth/loginUser", async (userData, { rejectWithValue }) => {
  try {
    const response = await userService.loginRequest(userData);
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
>("auth/signUpUser", async (userData, { rejectWithValue }) => {
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
  void,
  UserEmailField,
  {
    rejectValue: ErrorMessageObject;
  }
>("auth/getAccessUser", async ({ email }, { rejectWithValue }) => {
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
export interface logoutUserNotifyProps {
  notify: boolean;
}

export const logoutUser = createAsyncThunk<
  logoutUserNotifyProps,
  boolean | undefined,
  {
    rejectValue: string;
    dispatch?: AppDispatch;
  }
>("auth/logoutUser", async (notify = true, thunkAPI) => {
  try {
    thunkAPI.dispatch(clearUser());
    // thunkAPI.dispatch(roomActions.clearRooms);
    return { notify };
  } catch (err) {
    return thunkAPI.rejectWithValue("Logout failed");
  }
});

export const addUsers = createAsyncThunk<
  void,
  string[],
  {
    rejectValue: ErrorMessageObject;
  }
>("auth/addUsers", async (users, { rejectWithValue }) => {
  try {
    await adminService.addUsersRequest(users);
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

export const changePassword = createAsyncThunk<
  void,
  ChangePasswordProps,
  {
    rejectValue: ErrorMessageObject;
  }
>("auth/changePassword", async ({ newPassword }, { rejectWithValue }) => {
  try {
    const response = await userService.changePasswordRequest({ newPassword });
    return response.data;
  } catch (err) {
    const error = err as AxiosError<ErrorMessageObject>;

    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const forgotPassword = createAsyncThunk<
  void,
  UserEmailField,
  {
    rejectValue: ErrorMessageObject;
  }
>("auth/forgotPassword", async ({ email }, { rejectWithValue }) => {
  try {
    const response = await userService.forgotPasswordRequest({ email });
    return response.data;
  } catch (err) {
    const error = err as AxiosError<ErrorMessageObject>;

    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const resetPassword = createAsyncThunk<
  void,
  ResetPasswordProps,
  {
    rejectValue: ErrorMessageObject;
  }
>("auth/resetPassword", async ({ id, newPassword }, { rejectWithValue }) => {
  try {
    const response = await userService.resetPasswordRequest({
      id,
      newPassword,
    });
    return response.data;
  } catch (err) {
    const error = err as AxiosError<ErrorMessageObject>;

    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const getMe = createAsyncThunk<
  ExtendedUserInterface,
  void,
  {
    rejectValue: ErrorMessageObject;
  }
>("auth/getMe", async (_, { rejectWithValue }) => {
  try {
    const response = await userService.getMeRequest();
    return response.data;
  } catch (err) {
    const error = err as AxiosError<ErrorMessageObject>;

    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const updateMe = createAsyncThunk<
  UpdateMeResponse,
  UserFields,
  {
    rejectValue: ErrorMessageObject;
  }
>("auth/updateMe", async (userData, { rejectWithValue }) => {
  try {
    const response = await userService.updateMeRequest(userData);
    return response.data;
  } catch (err) {
    const error = err as AxiosError<ErrorMessageObject>;

    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

interface DeleteUserId {
  id: string
}

export const deleteUser = createAsyncThunk<
void,
DeleteUserId,
  {
    rejectValue: ErrorMessageObject;
  }
>("auth/deleteUser", async ({id}, { rejectWithValue }) => {
  try {
    await adminService.deleteUserById(id);
    // return response.data;
  } catch (err) {
    const error = err as AxiosError<ErrorMessageObject>;

    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const setAvatar = createAsyncThunk<
void,
FormData,
  {
    rejectValue: ErrorMessageObject;
  }
>("auth/setAvatar", async (formData, { rejectWithValue }) => {
  try {
    await userService.setAvatarRequest(formData);
  } catch (err) {
    const error = err as AxiosError<ErrorMessageObject>;

    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const deleteAvatar = createAsyncThunk<
void,
void,
  {
    rejectValue: ErrorMessageObject;
  }
>("auth/deleteAvatar", async (_, { rejectWithValue }) => {
  try {
    await userService.deleteAvatarRequest();
  } catch (err) {
    const error = err as AxiosError<ErrorMessageObject>;

    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});


