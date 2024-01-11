import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const loggedSlice = createSlice({
    name:"logged",
    initialState: false,
    reducers:{
        // @ts-ignore
        setLoggedSlice: (state, action: PayloadAction) => action.payload
    }
})


export const { setLoggedSlice } = loggedSlice.actions
export default loggedSlice.reducer