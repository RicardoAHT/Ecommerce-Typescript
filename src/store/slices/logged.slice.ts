import { createSlice } from "@reduxjs/toolkit";

export const loggedSlice = createSlice({
    name:"logged",
    initialState: false,
    reducers:{
        setLoggedSlice: (state, action) => action.payload
    }
})


export const { setLoggedSlice } = loggedSlice.actions
export default loggedSlice.reducer