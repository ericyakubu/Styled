import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./products";
import cartReducer from "./cart";
import filterReducer from "./filter";
import menuReducer from "./menu";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    filter: filterReducer,
    menu: menuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
