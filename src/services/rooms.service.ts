import { axiosService } from './axiosService';
import { urls } from 'utils';
import {AxiosRes} from 'models';
import {IRooms} from "../models";

 export const roomsService={
    getAll:():AxiosRes<IRooms[]>=> axiosService.get(urls.rooms),
};