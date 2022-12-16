import { bookingReducer, initialBookingState } from '../booking.slice';

describe('Booking Slice testing', () => {
  it('should return the initial state', () => {
    expect(bookingReducer(undefined, { type: undefined })).toEqual(initialBookingState);
  });
});
