import { axiosService } from './axiosService';
import { urls } from 'utils';
import {AxiosRes} from '../services'
import {IRooms} from "../models";

 export const roomsService={
    getAll:():AxiosRes<IRooms[]>=> axiosService.get(urls.rooms),
    getById:(id:number):AxiosRes<IRooms>=>axiosService.get(`${urls.rooms}/${id}`)
};