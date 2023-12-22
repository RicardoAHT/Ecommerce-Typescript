import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./app.slice";
import cartSlice from "./cart.slice";
import productSlice from "./product.slice";
import purchasesSlice from "./purchases.slice";

export default configureStore({
    reducer:{
        app: appSlice,
        cart: cartSlice,
        products: productSlice,
        purchases: purchasesSlice
    }
})