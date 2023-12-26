import { configureStore } from "@reduxjs/toolkit";
// import appSlice from "./slices/app.slice";
import cart from "./slices/cart.slice";
// import productSlice from "./slices/product.slice";
// import purchasesSlice from "./slices/purchases.slice";
import credentials from "./slices/credentials.slice";

export default configureStore({
    reducer:{
        credentials,
        //app: appSlice,
        cart,
        //products: productSlice,
        //purchases: purchasesSlice,
    }
})