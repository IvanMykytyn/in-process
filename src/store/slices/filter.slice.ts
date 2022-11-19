import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    itemId: ''
}

const filterSlice = createSlice({
    name: 'filterSlice',
    initialState: initialState,
    reducers: {
        setItemId(state, action){
            state.itemId = action.payload
        }
    }
})

export const { setItemId }= filterSlice.actions;

export default filterSlice.reducer;