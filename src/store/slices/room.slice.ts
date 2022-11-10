import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IRooms} from "models";
import {roomsService} from "../../services";
import {AxiosError} from "axios";

interface IRoom {
    rooms: IRooms[]
};

const initialState: IRoom = {
    rooms: []
};

const getAll = createAsyncThunk<IRooms[], void>(
    'roomSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await roomsService.getAll();
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const roomSlice = createSlice({
    name: 'roomSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.rooms = action.payload
            })

});

const {reducer: roomReducer} = roomSlice;

const roomActions = {
    getAll
};

export {
    roomReducer,
    roomActions
};