import type {
  PromiseResponse,
  UserLoginProps,
  UserSignUpProps,
  UserEmailField,
  ResetPasswordProps,
  UserWithToken,
  // UserUpdateProps,
} from 'models';
import { axiosService } from './axiosService';
import { getFromLocalStorage, urls } from 'utils';

const loginRequest = (userData: UserLoginProps): PromiseResponse<UserWithToken> =>
  axiosService.post(`${urls.auth}/login`, userData);
const userService = {

  signUpRequest: (userData: UserSignUpProps): PromiseResponse<UserWithToken> =>
    axiosService.post(`${urls.auth}/signup`, userData),

  getAccessRequest: ({ email }: UserEmailField): PromiseResponse<UserWithToken> =>
    axiosService.post(`${urls.auth}/get-access`, { email }),

  forgotPasswordRequest: ({
    email,
  }: UserEmailField): PromiseResponse<UserWithToken> =>
    axiosService.post(`${urls.forgotPassword}`, { email }),

  resetPasswordRequest: ({
    id,
    token,
    password,
  }: ResetPasswordProps): PromiseResponse<UserWithToken> =>
    axiosService.put(`${urls.resetPassword}/${id}/${token}`, { password }),

  isLoggedIn: (): boolean => {
    const token: string = getFromLocalStorage('token');
    return !!token;
  },
};

// const updateUserRequest = (userData: UserUpdateProps): PromiseResponse =>
//   axiosService.put(`${urls.auth}/update-user`, userData);

export { userService,loginRequest };
