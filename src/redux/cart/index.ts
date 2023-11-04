import { createSlice } from "@reduxjs/toolkit";
import { CartItemType } from "../../types";
import { immediateCheckout } from "./asyncActions";

interface initialStateType {
  items: CartItemType[];
  amount: number;
  totalPrice: number;
  totalQnty: number;
  showCart: boolean;
}

const initialState: initialStateType = {
  items: [],
  amount: 0,
  totalPrice: 0,
  totalQnty: 0,
  showCart: false,
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setShowCart: (state) => {
      state.showCart = !state.showCart;
    },
    addToCart: (state, action) => {
      let newPrice: number = 0;

      action.payload.forEach((newItem: CartItemType) => {
        const found: CartItemType | undefined = state.items.find(
          (oldItem) =>
            oldItem.id === newItem.id && oldItem.size === newItem.size
        );

        if (found) {
          const index = state.items.indexOf(found);
          found.quantity++;
          state.items.splice(index, 1, found);
        } else {
          state.items = [...state.items, newItem];
        }

        state.totalQnty++;
        newPrice += newItem.price;
        state.totalPrice = Number(newPrice.toFixed(2));
      });
    },
    increaseQuantity: (state, action) => {
      let newPrice: number = 0;

      const index = state.items.findIndex(
        (item) =>
          item.name === action.payload.name && item.size === action.payload.size
      );
      state.items[index].quantity++;
      state.totalQnty++;

      newPrice = state.totalPrice + action.payload.price;
      state.totalPrice = Number(newPrice.toFixed(2));
    },
    decreaseQuantity: (state, action) => {
      let newPrice: number = 0;
      const index = state.items.findIndex(
        (item) =>
          item.name === action.payload.name && item.size === action.payload.size
      );
      const newQnty = state.items[index].quantity - 1;
      if (newQnty > 0) {
        state.items[index].quantity--;
      } else {
        state.items.splice(index, 1);
      }
      state.totalQnty--;
      newPrice = state.totalPrice - action.payload.price;
      state.totalPrice = Number(newPrice.toFixed(2));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(immediateCheckout.fulfilled, (_, action) => {
      window.open(action.payload.session.url, "_blank");
    });
  },
});

export const { setShowCart, addToCart, increaseQuantity, decreaseQuantity } =
  cart.actions;

export default cart.reducer;
