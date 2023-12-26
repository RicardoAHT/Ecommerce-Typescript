import { configureStore } from "@reduxjs/toolkit";
// import appSlice from "./slices/app.slice";
// import cartSlice from "./slices/cart.slice";
// import productSlice from "./slices/product.slice";
// import purchasesSlice from "./slices/purchases.slice";
import credentialsSlice from "./slices/credentials.slice";

export default configureStore({
    reducer:{
        credentials: credentialsSlice,
        //app: appSlice,
        //cart: cartSlice,
        //products: productSlice,
        //purchases: purchasesSlice,
    }
})