import { PromiseResponse, UserLoginProps, UserSignUpProps } from 'models'
import { axiosService } from './axiosService'
import { urls } from './constants'

const loginRequest = (userData: UserLoginProps): PromiseResponse =>
  axiosService.post(`${urls}/login`, userData)

const signUpRequest = (userData: UserSignUpProps): PromiseResponse =>
  axiosService.post(`${urls}/signup`, userData)

export { loginRequest, signUpRequest }
