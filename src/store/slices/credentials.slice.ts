import { createSlice } from "@reduxjs/toolkit";

export const credentialsSlice = createSlice({
    name: "credentials",
    initialState: null,
    reducers:{
        setCredentialsSlice: (state, action) => action.payload
    }
})

export const { setCredentialsSlice } = credentialsSlice.actions
export default credentialsSlice.reducer