import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Products {
    id: number | string;
    title: string;
    price: number;
    description: string;
    brand: string
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: [] as Products[],
    reducers: {
        setCartSlice: (state, action: PayloadAction<Products[]>) => action.payload, //Defino el setter
        addProduct: (state, action: PayloadAction<Products>) => { 
            if(state.findIndex(product => product.id === action.payload.id) === -1){
                return [...state, action.payload]
            } else{
                return state
            }
        },//! Agrego productos al carrito, dejando los que ya estaban gracias al spread operator
        deleteProduct: (state, action: PayloadAction<{id: number | string}>) => {
            return state.filter(product => product.id !== action.payload.id)
        }, //! Elimino el producto
    }
})

export const {setCartSlice, addProduct, deleteProduct } = cartSlice.actions

export default cartSlice.reducer