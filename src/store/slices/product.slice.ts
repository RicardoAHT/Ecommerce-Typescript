import { createSlice } from '@reduxjs/toolkit';
import { request } from './app.slice';
import axios from '../../utils/axios';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        filteredProducts: []
    },
    reducers: {
        setProducts: (state, { payload }) => {
            state.products = payload;
            state.filteredProducts = payload;
        },
        setFilteredProducts: (state, { payload }) => {
            state.filteredProducts = payload;
        },
        filterByPrice: (state, { payload: {from, to}}) => {
            state.filteredProducts = state.products.filter(p => 
                +p.price >= +from && +p.price <= +to
            );
        }
    }
})

export const getProductsThunk = () => (dispatch) => {
    dispatch(request(async() => {
        const res = await axios().get('/products');
        dispatch(setProducts(res.data));
    }))
}

export const filterByCategoryThunk = categoryId => (dispatch) => {
    dispatch(request(async() => {
        const res = await axios().get(`/products?categoryId=${categoryId}`);
        dispatch(setFilteredProducts(res.data));
    }))
}

export const filterByTitleThunk = title => (dispatch) => {
    dispatch(request(async() => {
        const res = await axios().get(`/products?title=${title}`);
        dispatch(setFilteredProducts(res.data));
    }))
}

export const { setProducts, setFilteredProducts, filterByPrice } = productsSlice.actions;

export default productsSlice.reducer;