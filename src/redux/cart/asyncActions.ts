import { createAsyncThunk } from "@reduxjs/toolkit";
import { CartApi } from "../../api/Cart.api";
import { CartItemType } from "../../types";

export const immediateCheckout = createAsyncThunk(
  "cart/immediateCheckout",
  async (products: CartItemType[]) => {
    return await CartApi.immediateCheckout(products);
  }
);
