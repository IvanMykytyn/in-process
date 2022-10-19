import type {
  PromiseResponse,
  UserLoginProps,
  UserSignUpProps,
  ForgotPasswordProps,
  ResetPasswordProps,
  UserUpdateProps,
} from 'models';
import { axiosService } from './axiosService';
import { urls } from 'utils/constants';

// TODO ask about endpoints and methods
const loginRequest = (userData: UserLoginProps): PromiseResponse =>
  axiosService.post(`${urls.auth}/login`, userData);

const signUpRequest = (userData: UserSignUpProps): PromiseResponse =>
  axiosService.post(`${urls.auth}/signup`, userData);

const updateUserRequest = (userData: UserUpdateProps): PromiseResponse =>
  axiosService.put(`${urls.auth}/update-user`, userData);

const forgotPasswordRequest = ({ email }: ForgotPasswordProps): PromiseResponse =>
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
  updateUserRequest,
  forgotPasswordRequest,
  resetPasswordRequest,
};
