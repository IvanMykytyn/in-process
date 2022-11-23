import { createSlice } from '@reduxjs/toolkit';

import { IRooms, IRoomsWithSoonestBookings, ISoonestBookings } from 'models';
import { getAllRooms, getAllSoonestBookings } from '../thunk';
import { RootState } from 'store/store';
import { getRoomImage } from 'utils/tools/rooms.img';

interface IRoom {
  rooms: IRooms[];
  filteredRooms: IRooms[];
  soonestBookings: IRoomsWithSoonestBookings | null;
}

const initialRoomState: IRoom = {
  rooms: [],
  filteredRooms: [],
  soonestBookings: null,
};

const roomSlice = createSlice({
  name: 'roomSlice',
  initialState: initialRoomState,
  reducers: {
    getFilteredRooms(state, action) {
      state.filteredRooms = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAllRooms.fulfilled, (state, action) => {
        const roomsWithImage = action.payload.map((room) => {
          return { ...room, roomImg: getRoomImage(room.id) };
        });

        state.rooms = [...roomsWithImage];
        state.filteredRooms = [...roomsWithImage ];
      })
      .addCase(getAllSoonestBookings.fulfilled, (state, action) => {
        state.soonestBookings = action.payload;
      }),
});

const {
  reducer: roomReducer,
  actions: { getFilteredRooms },
} = roomSlice;

const selectRooms = (state: RootState) => state.rooms;
const roomActions = {
  getAllRooms,
  getAllSoonestBookings,
};

export { roomReducer, roomActions, selectRooms, initialRoomState, getFilteredRooms };
