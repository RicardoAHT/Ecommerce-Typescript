import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cart from "./slices/cart.slice";
import credentials from "./slices/credentials.slice";
import logged from "./slices/logged.slice";
import cartCounter from "./slices/cartCounter.slice";
import cartValue from "./slices/cartValue.slice";
import search from "./slices/search.slice";
import priceFilter from "./slices/priceFilter.slice";

const rootReducer = combineReducers({
  cart,
  cartCounter,
  cartValue,
  credentials,
  logged,
  search,
  priceFilter
});
  
export type RootState = ReturnType<typeof rootReducer>;
  
const store = configureStore({
  reducer: rootReducer,
});
  
export default store;


/* Con JavaScript
export default configureStore({
  reducer:{
    credentials,
    cart,
  }
})
*/