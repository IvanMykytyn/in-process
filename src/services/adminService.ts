import { PromiseResponse as PR, UserEmailField, UserWithToken } from 'models';
import { urls } from 'utils';
import { axiosService } from './axiosService';

const addUsers = (users: Array<UserEmailField>): PR<UserWithToken> =>
  axiosService.post(`${urls.admin}/addUsers`, {
    usersEmails: users,
  });

export { addUsers };
