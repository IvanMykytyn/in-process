import { AxiosRes as PR } from 'models';
import { urls } from 'utils';
import { axiosService } from './axios.service';

const addUsersRequest = (users: Array<string>): PR<void> =>
  axiosService.post(`${urls.admin}/addUsers`, {
    usersEmails: users,
  });

const switchHiddenStatus = (): PR<void> =>
  axiosService.put(`${urls.admin}/hiddenStatus`);

const adminService = { addUsersRequest, switchHiddenStatus };

export { adminService };
