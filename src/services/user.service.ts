import type {
  AxiosRes as PR,
  UserLoginProps,
  UserSignUpProps,
  UserEmailField,
  ResetPasswordProps,
  UserWithToken,
  UserInterface,
  UserIdField,
  UserFields,
  UpdateMeResponse,
  ExtendedUserInterface,
  // UserUpdateProps,
} from 'models';
import { axiosService } from './axios.service';
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

const getMeRequest = (): PR<ExtendedUserInterface> => axiosService.get(`${urls.users}/me`);

const updateMeRequest = (userData: UserFields): PR<UpdateMeResponse> =>
  axiosService.put(`${urls.users}/me`, userData);

const getUsersRequest = (): PR<Array<UserInterface & UserIdField>> =>
  axiosService.get(`${urls.users}`);

const isLoggedIn = (): boolean => {
  const token: string | null = getFromLocalStorage('token');
  return !!token;
};

const setAvatarRequest = (file: FormData) => axiosService.post(`${urls.users}/avatar`, file)

const deleteAvatarRequest = () => axiosService.delete(`${urls.users}/avatar`)

const userService = {
  loginRequest,
  signUpRequest,
  getAccessRequest,
  forgotPasswordRequest,
  resetPasswordRequest,
  changePasswordRequest,
  isLoggedIn,
  getMeRequest,
  getUsersRequest,
  updateMeRequest,
  setAvatarRequest,
  deleteAvatarRequest,
};

export { userService };
