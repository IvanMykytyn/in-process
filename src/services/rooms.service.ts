import {axiosService} from './axios.service';
import {urls} from 'utils';
import {AxiosRes, IRoomsWithSoonestBookings} from 'models';
import {IRooms} from "../models";

export const roomsService = {
    getAll: (officeId: number): AxiosRes<IRooms[]> =>
        axiosService.get(`${urls.rooms}?officeId=${officeId}`),

    getAllSoonestBookings: (roomId: number, soonestBookingsDays: number): AxiosRes<IRoomsWithSoonestBookings> =>
        axiosService.get(`${urls.rooms}/soonestBookings?roomId=${roomId}&soonestBookingsDays=${soonestBookingsDays}`)
};