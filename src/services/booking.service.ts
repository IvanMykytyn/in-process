import {urls} from 'utils';
import {axiosService} from './axios.service';
import {
    AxiosRes,
    IBookingDelete,
    IBookingPut,
    IBookingRecurring,
    IBookingOneTimePut,
    IBookingOneTime,
    IBookingOneTimeDelete,
    IBookingOwn
} from 'models';


const bookingService = {
    getAllBookings: (startDate: string, endDate: string, officeId: number = 2, roomId?: string): AxiosRes<IBookingRecurring[]> =>
        axiosService.get(`${urls.bookings}/recurring?startDate=${startDate}&endDate=${endDate}&officeId=${officeId}${!!roomId && '&roomId=' + roomId}`),

    recurringPost: (booking: IBookingRecurring): AxiosRes<IBookingRecurring> => axiosService.post(`${urls.bookings}/recurring`, booking),
    recurringPut: (scheduleId: number, newBooking: IBookingPut): AxiosRes<IBookingPut> => axiosService.put(`${urls.bookings}/recurring/${scheduleId}`, newBooking),
    recurringDelete: (scheduleId: number): AxiosRes<IBookingDelete> => axiosService.delete(`${urls.bookings}/recurring/${scheduleId}`),

    postBookingOneTime: (booking: IBookingOneTime): AxiosRes<IBookingOneTime> => axiosService.post(`${urls.bookings}/one-time`, booking),
    deleteBookingOneTime: (bookingId: number): AxiosRes<IBookingOneTimeDelete> => axiosService.delete(`${urls.bookings}/one-time/${bookingId}`),
    putBookingOneTime: (bookingId: number, newBooking: IBookingOneTimePut): AxiosRes<IBookingOneTimePut> => axiosService.put(`${urls.bookings}/${bookingId}`, newBooking),

    getBookingOwn: (page: number, limit: number): AxiosRes<IBookingOwn> => axiosService.get(`${urls.bookings}/own?page=${page}&limit=${limit}`)
};

export {bookingService};