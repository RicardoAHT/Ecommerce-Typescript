import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const cartCounterSlice = createSlice({
    name: "cartCounter",
    initialState: 0,
    reducers:{
        setCartCounterSlice: (state, action) => action.payload
    }
})

export const {setCartCounterSlice} = cartCounterSlice.actions
export default cartCounterSlice.reducer