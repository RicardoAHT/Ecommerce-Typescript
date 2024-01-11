import { PayloadAction, createSlice } from "@reduxjs/toolkit";



export const isLoadingSlice =  createSlice({
    name: "isLoading",
    initialState: false,
    reducers: {
        // @ts-ignore
        setIsLoadingSlice: (state, action: PayloadAction) => action.payload
    }
})

export const {setIsLoadingSlice} = isLoadingSlice.actions
export default isLoadingSlice.reducer