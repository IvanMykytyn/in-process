import axios from 'axios';

import { baseURL } from 'utils/constants';

const axiosService = axios.create({ baseURL });

export { axiosService };
