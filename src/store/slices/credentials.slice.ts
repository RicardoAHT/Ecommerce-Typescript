import { createSlice } from "@reduxjs/toolkit";

interface CredentialsState {
    name: string;
    email: string;
    token: string;
}

export const credentialsSlice = createSlice({
    name: "credentials",
    initialState: null as CredentialsState | null,
    reducers:{
        setCredentialsSlice: (state, action) => action.payload
    }
})

export const { setCredentialsSlice } = credentialsSlice.actions
export default credentialsSlice.reducer