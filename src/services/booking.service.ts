import {axiosService} from './axios.service';
import {urls} from 'utils';
import {AxiosRes, IBookingDelete, IBookingPut, IBookingRecurring} from 'models';


export const bookingService = {
    getAllBookings: (startDate: string, endDate: string, officeId: number = 2, roomId?: string): AxiosRes<IBookingRecurring[]> =>
        axiosService.get(`${urls.booking}?startDate=${startDate}&endDate=${endDate}&officeId=${officeId}${!!roomId && '&roomId=' + roomId}`),
    recurringPost: (booking: IBookingRecurring): AxiosRes<IBookingRecurring> => axiosService.post(urls.booking, booking),
    recurringPut: (scheduleId: number, newBooking: IBookingPut): AxiosRes<IBookingPut> => axiosService.put(`${urls.booking}/${scheduleId}`, newBooking),
    recurringDelete: (scheduleId: number): AxiosRes<IBookingDelete> => axiosService.delete(`${urls.booking}/${scheduleId}`),
};

