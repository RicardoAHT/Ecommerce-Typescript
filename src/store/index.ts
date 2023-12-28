import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cart from "./slices/cart.slice";
import credentials from "./slices/credentials.slice";

const rootReducer = combineReducers({
    cart,
    credentials,
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