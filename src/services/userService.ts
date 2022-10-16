import { AxiosResponse } from 'axios'
import { axiosService } from './axiosService'

const signIn = (userData: userSignInProps): Promise<AxiosResponse<any, any>> => {
  return axiosService.post('/auth/login', userData)
}

const signUp = (userData: userSignUpProps): Promise<AxiosResponse<any, any>> => {
  return axiosService.post('/auth/signup', userData)
}

export { signIn, signUp }


interface userSignInProps {
  email: string
  password: string
}

interface userSignUpProps extends userSignInProps {
  firstName: string
  lastName: string
}