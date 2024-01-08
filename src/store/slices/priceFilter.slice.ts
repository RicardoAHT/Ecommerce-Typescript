import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const priceFilterSlice = createSlice({
    name: "priceFilter",
    initialState: [0 , Infinity],
    reducers:{
        setPriceFilterSlice: (state, action) => action.payload
    }
})

export const {setPriceFilterSlice} = priceFilterSlice.actions
export default priceFilterSlice.reducer