import { AxiosRes as PR } from 'models';
import { urls } from 'utils';
import { axiosService } from './axiosService';

const addUsersRequest = (users: Array<string>): PR<void> =>
  axiosService.post(`${urls.admin}/addUsers`, {
    usersEmails: users,
  });

export { addUsersRequest };
