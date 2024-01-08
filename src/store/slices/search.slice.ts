import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "search",
    initialState: "",
    reducers:{
        setSearchSlice: (state, action) => action.payload
    }

})

export const { setSearchSlice } = searchSlice.actions

export default searchSlice.reducer