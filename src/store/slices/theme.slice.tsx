import {createSlice, current} from "@reduxjs/toolkit"

import {RootState} from "../store";
import {actions} from "@storybook/addon-actions";
import {getFromLocalStorage} from "../../utils";

interface IState {
    newTheme: string;
};

const initialState: IState = {
    newTheme: getFromLocalStorage('dark'),
};


const themeSlice = createSlice({
        name: 'themeSlice',
        initialState: initialState,
        reducers: {
            setNewTheme: (state, action) => {
                state.newTheme = action.payload;
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