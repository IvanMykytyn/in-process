import type {
  PromiseResponse,
  UserLoginProps,
  UserSignUpProps,
  UserEmailField,
  ResetPasswordProps,
  // UserUpdateProps,
} from 'models';
import { axiosService } from './axiosService';
import { urls } from 'utils/constants';


const loginRequest = (userData: UserLoginProps): PromiseResponse =>
  axiosService.post(`${urls.auth}/login`, userData);

const signUpRequest = (userData: UserSignUpProps): PromiseResponse =>
  axiosService.post(`${urls.auth}/signup`, userData);

const getAccessRequest = ({ email }: UserEmailField): PromiseResponse =>
  axiosService.post(`${urls.auth}/get-access`, { email });

// const updateUserRequest = (userData: UserUpdateProps): PromiseResponse =>
//   axiosService.put(`${urls.auth}/update-user`, userData);

const forgotPasswordRequest = ({ email }: UserEmailField): PromiseResponse =>
  axiosService.post(`${urls.forgotPassword}`, { email });

const resetPasswordRequest = ({
  id,
  token,
  password,
}: ResetPasswordProps): PromiseResponse =>
  axiosService.put(`${urls.resetPassword}/${id}/${token}`, { password });

export {
  loginRequest,
  signUpRequest,
  // updateUserRequest,
  forgotPasswordRequest,
  resetPasswordRequest,
  getAccessRequest,
};
