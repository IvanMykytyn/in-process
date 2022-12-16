import { createSlice } from '@reduxjs/toolkit';

import { IRooms, IRoomsWithSoonestBookings, ISoonestBookings } from 'models';
import { getAllRooms, getAllSoonestBookings } from '../thunk';
import { RootState } from 'store/store';
import { getRoomImage } from 'utils/tools/rooms.img';

interface IRoom {
  rooms: IRooms[];
  filteredRooms: IRooms[];
  soonestBookings: IRoomsWithSoonestBookings | null;
  isLoading: boolean;
}

const initialRoomState: IRoom = {
  rooms: [],
  filteredRooms: [],
  soonestBookings: null,
  isLoading: false,
};

const roomSlice = createSlice({
  name: 'roomSlice',
  initialState: initialRoomState,
  reducers: {
    setFilteredRooms(state, action) {
      state.filteredRooms = action.payload;
    }
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAllRooms.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllRooms.fulfilled, (state, action) => {
        const roomsWithImage = action.payload.map((room) => {
          return { ...room, roomImg: getRoomImage(room.id) };
        });
        state.isLoading = false;
        state.rooms = [...roomsWithImage];
        state.filteredRooms = [...roomsWithImage];
      })
      .addCase(getAllSoonestBookings.fulfilled, (state, action) => {
        state.soonestBookings = action.payload;
      }),
});

const {
  reducer: roomReducer,
  actions: { setFilteredRooms },
} = roomSlice;

const selectRooms = (state: RootState) => state.rooms;
const roomActions = {
  getAllRooms,
  getAllSoonestBookings,
};

export { roomReducer, roomActions, selectRooms, initialRoomState, setFilteredRooms};
