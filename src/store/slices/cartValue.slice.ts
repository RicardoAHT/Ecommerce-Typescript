import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const cartValueSlice = createSlice({
    name: "cartValue",
    initialState: 0,
    reducers:{
        setCartValueSlice: ( state, action) => action.payload
    }
})

export const { setCartValueSlice } = cartValueSlice.actions
export default cartValueSlice.reducer