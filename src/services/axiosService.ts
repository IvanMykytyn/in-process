import axios from 'axios';
import { logoutUser, store } from 'store';
import { getFromLocalStorage } from 'utils';
import { baseURL } from 'utils/constants/urls';

const axiosService = axios.create({ baseURL });

axiosService.interceptors.request.use(
  (config) => {
    const token = getFromLocalStorage('token');

    if (token) {
      if (!config.headers) config.headers = {};
      config.headers['Authorization'] = `bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosService.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      await store.dispatch(logoutUser());
    }
    return Promise.reject(error);
  }
);

export { axiosService };
