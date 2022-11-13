import type {
  AxiosRes as PR,
  UserLoginProps,
  UserSignUpProps,
  UserEmailField,
  ResetPasswordProps,
  UserWithToken,
  User,
  // UserUpdateProps,
} from 'models';
import { axiosService } from './axiosService';
import { getFromLocalStorage, urls } from 'utils';
import { ChangePasswordProps } from 'store';

const loginRequest = (userData: UserLoginProps): PR<UserWithToken> =>
  axiosService.post(`${urls.auth}/login`, userData);

const signUpRequest = (userData: UserSignUpProps): PR<UserWithToken> =>
  axiosService.post(`${urls.auth}/signup`, userData);

const getAccessRequest = ({ email }: UserEmailField): PR<void> =>
  axiosService.post(`${urls.auth}/get-access`, { email });

const forgotPasswordRequest = ({ email }: UserEmailField): PR<void> =>
  axiosService.put(`${urls.users}/forgotPassword`, { email });

const resetPasswordRequest = ({ id, newPassword }: ResetPasswordProps): PR<void> =>
  axiosService.put(`${urls.users}/resetPassword`, { newPassword, id });

const changePasswordRequest = ({ newPassword }: ChangePasswordProps): PR<void> =>
  axiosService.put(`${urls.users}/changePassword`, { newPassword });

const getMeRequest = (): PR<User> => axiosService.get(`${urls.users}/me`);

const isLoggedIn = (): boolean => {
  const token: string | null = getFromLocalStorage('token');
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
  changePasswordRequest,
  isLoggedIn,
  getMeRequest,
};
