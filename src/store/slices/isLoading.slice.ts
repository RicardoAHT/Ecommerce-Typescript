import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const isLoadingSlice =  createSlice({
    name: "isLoading",
    initialState: false,
    reducers: {
        setIsLoadingSlice: (state, action) => action.payload
    }
})

export const {setIsLoadingSlice} = isLoadingSlice.actions
export default isLoadingSlice.reducer