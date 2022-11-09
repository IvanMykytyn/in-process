import type {
  AxiosRes as PR,
  UserLoginProps,
  UserSignUpProps,
  UserEmailField,
  ResetPasswordProps,
  UserWithToken,
  // UserUpdateProps,
} from 'models';
import { axiosService } from './axiosService';
import { getFromLocalStorage, urls } from 'utils';

const loginRequest = (userData: UserLoginProps): PR<UserWithToken> =>
  axiosService.post(`${urls.auth}/login`, userData);

const signUpRequest = (userData: UserSignUpProps): PR<UserWithToken> =>
  axiosService.post(`${urls.auth}/signup`, userData);

const getAccessRequest = ({ email }: UserEmailField): PR<UserWithToken> =>
  axiosService.post(`${urls.auth}/get-access`, { email });

const forgotPasswordRequest = ({ email }: UserEmailField): PR<UserWithToken> =>
  axiosService.post(`${urls.forgotPassword}`, { email });

const resetPasswordRequest = ({ id, token, password }: ResetPasswordProps): PR<UserWithToken> =>
  axiosService.put(`${urls.resetPassword}/${id}/${token}`, { password });

const isLoggedIn = (): boolean => {
  const token: string = getFromLocalStorage('token');
  return !!token;
};

// const updateUserRequest = (userData: UserUpdateProps): AxiosRes =>
//   axiosService.put(`${urls.auth}/update-user`, userData);

export {
  loginRequest,
  signUpRequest,
  getAccessRequest,
  forgotPasswordRequest,
  resetPasswordRequest,
  isLoggedIn,
};
