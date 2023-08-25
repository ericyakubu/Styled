import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./products";
import cartReducer from "./cart";
import userReducer from "./user";
import filterReducer from "./filter";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    user: userReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
