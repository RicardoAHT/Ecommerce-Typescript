import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "search",
    initialState: "",
    reducers:{
        // @ts-ignore
        setSearchSlice: (state, action: PayloadAction) => action.payload
    }

})

export const { setSearchSlice } = searchSlice.actions

export default searchSlice.reducer