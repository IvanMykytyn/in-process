import { PromiseResponse } from 'models';
import { forgotPasswordProps, resetPasswordProps } from 'models/forgotPassword';
import { axiosService } from './axiosService';
import { urls } from './constants';

// TODO ask about endpoints and methods
const forgotPasswordRequest = ({ email }: forgotPasswordProps): PromiseResponse =>
  axiosService.post(`${urls.forgotPassword}`, { email });

const resetPasswordRequest = ({
  id,
  token,
  password,
}: resetPasswordProps): PromiseResponse =>
  axiosService.post(`${urls.resetPassword}/${id}/${token}`, { password });

export { forgotPasswordRequest, resetPasswordRequest };
