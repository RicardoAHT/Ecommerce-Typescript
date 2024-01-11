import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const cartValueSlice = createSlice({
    name: "cartValue",
    initialState: 0,
    reducers:{
        // @ts-ignore
        setCartValueSlice: ( state, action: PayloadAction) => action.payload
    }
})

export const { setCartValueSlice } = cartValueSlice.actions
export default cartValueSlice.reducer