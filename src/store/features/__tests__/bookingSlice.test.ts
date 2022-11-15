import reducer, { initialState } from '../bookingSlice';

describe('Booking Slice testing', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });
});
