import { createSlice } from "@reduxjs/toolkit";
import { request, setIsCartOpen, setIsLoading} from "./app.slice"
import axios from "../utils/axios";

export const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        setCart: (_, {payload}) => payload,
        updateQuantity: (state, {payload: {quantity, index}}) => {
            state[index].quantity=quantity
        },
        deleteProduct: (state, {payload: index}) => {
            state.splice(index, 1)
        },
        addProduct: (state, {payload}) => {
            state.push(payload)
        }
    }
})

export const getCart = () => (dispatch) => {
    if(!localStorage.getItem('token')) return;
    dispatch(request(async() => {
        const res = await axios().get('/cart');
        dispatch(setCart(res.data));
    }))
}

export const deleteProductCart = (id, index) => (dispatch) => {
    dispatch(request(async() => {
        await axios().delete(`/cart/${id}`);
        dispatch(deleteProduct(index));
    }))
}

export const addProductCart = (productCart) => dispatch => {
    dispatch(request(async() => {
        const res = await axios().post("/cart/", productCart)
        const {data}= await axios().get(`/cart/${res.data.id}`)
        dispatch(addProduct(data))
        dispatch(setIsCartOpen(true))
    }, {
        notificationMessage: "Producto añadido al carrito!"
    }))
}

export const checkoutCart = () => dispatch => {
    dispatch(request(async() => {
        await axios().post('/purchases');
        dispatch(setCart([]));
        dispatch(getCart());
    }, {
        notificationMessage: "Cart was succesfully bought"
    }))
}

export const { setCart, updateQuantity, addProduct, deleteProduct } = cartSlice.actions;

export default cartSlice.reducer;