import {createSlice} from "@reduxjs/toolkit"

import {RootState} from "../store";
import {getFromLocalStorage, setToLocalStorage} from "../../utils";

interface IState {
    mode: string;
};

const initialState: IState = {
    mode: getFromLocalStorage('mode') ?? 'light',
};


const themeSlice = createSlice({
        name: 'themeSlice',
        initialState: initialState,
        reducers: {
            setNewTheme: (state, action) => {
                state.mode = action.payload;
                setToLocalStorage('mode', action.payload)
            }
        },
    }
);


const {reducer: themeReducer, actions: {setNewTheme}} = themeSlice;

const selectTheme = (state: RootState) => state.themes;

export {
    themeReducer,
    setNewTheme,
    selectTheme
};