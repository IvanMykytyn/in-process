import reducer, { initialBookingState } from '../booking.slice';

describe('Booking Slice testing', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialBookingState);
  });
});
