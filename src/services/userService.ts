import type { PromiseResponse, User, UserLoginProps, UserSignUpProps } from 'models';
import { axiosService } from './axiosService';
import { urls } from './constants';

// TODO ask about endpoints
const loginRequest = (userData: UserLoginProps): PromiseResponse =>
  axiosService.post(`${urls.auth}/login`, userData);

const signUpRequest = (userData: UserSignUpProps): PromiseResponse =>
  axiosService.post(`${urls.auth}/signup`, userData);

const updateUserRequest = (userData: User): PromiseResponse =>
  axiosService.put(`${urls.auth}/update-user`, userData);

export { loginRequest, signUpRequest, updateUserRequest };
