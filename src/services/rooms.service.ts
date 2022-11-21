import { axiosService } from './axios.service';
import { urls } from 'utils';
import {AxiosRes} from 'models';
import {IRooms} from "../models";

 export const roomsService={
    getAll:(officeId: number, soonestBookingsDays?: number):AxiosRes<IRooms[]>=>
        axiosService.get(`${urls.rooms}?officeId=${officeId}${!!soonestBookingsDays && '&soonestBookingsDays=' + soonestBookingsDays || ''}`)
};