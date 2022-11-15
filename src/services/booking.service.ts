import {axiosService} from './axios.service';
import {urls} from 'utils';
import {AxiosRes, IBookingRecurring} from 'models';


export const bookingService = {
    recurringPost: (id: string): AxiosRes<IBookingRecurring> => axiosService.post(urls.booking, id),
    recurringDelete: (id: string): AxiosRes<IBookingRecurring> => axiosService.delete(`${urls.booking}${id}`),
    recurringPut: (id: string, newBooking: IBookingRecurring): AxiosRes<IBookingRecurring> => axiosService.put(`${urls.booking}${id}`, newBooking),
};

