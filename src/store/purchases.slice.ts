import { createSlice } from '@reduxjs/toolkit';
import { request } from './app.slice';
import axios from '../utils/axios';

export const purchasesSlice = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: {
        setPurchases: (_, { payload }) => payload
    }
})

export const getPurchases = () => dispatch => {
    dispatch(request(async () => {
        const res = await axios().get('/purchases')
        dispatch(setPurchases(res.data));
    }))
}

export const { setPurchases } = purchasesSlice.actions;

export default purchasesSlice.reducer;
