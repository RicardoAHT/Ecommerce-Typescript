import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Products {
    id: number | string;
    // otras propiedades del producto
  }


export const cartSlice = createSlice({
    name: "cart",
    initialState: [] as Products[],
    reducers: {
        setCartSlice: (state, action: PayloadAction<Products[]>) => action.payload, //Defino el setter
        addProduct: (state, action: PayloadAction<Products>) => { // Agrego productos al carrito, dejando los que ya estaban gracias al spread operator
        if(state.findIndex(product => product.id === action.payload.id) === -1){
            return [...state, action.payload]
        } else{
            return state
        }
    },
        deleteProduct: (state, action: PayloadAction<{id: number | string}>) => state.filter(product => product.id !== action.payload.id) //! Revisar // Elimino el producto
    }
})

export const {setCartSlice, addProduct, deleteProduct } = cartSlice.actions

export default cartSlice.reducer