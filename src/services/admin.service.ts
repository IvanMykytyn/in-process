import { AxiosRes as PR } from 'models';
import { urls } from 'utils';
import { axiosService } from './axios.service';

const addUsersRequest = (users: Array<string>): PR<void> =>
  axiosService.post(`${urls.admin}/addUsers`, {
    usersEmails: users,
  });

export { addUsersRequest };
