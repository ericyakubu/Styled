import { createSlice } from "@reduxjs/toolkit";
import { ProductType, ProductsType } from "../../types";
import { getProduct, getTopProducts } from "./asyncActions";
import { getProducts } from "../filter/asyncActions";

interface initialStateType {
  isLoading: boolean;
  isTopLoading: boolean;
  isProductLoading: boolean;

  product: ProductType | null;
  topProducts: ProductsType[];
  products: ProductsType[];
}

const initialState: initialStateType = {
  isLoading: false,
  isTopLoading: false,
  isProductLoading: false,

  product: null,
  topProducts: [],
  products: [],
};

export const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    removeOldProduct: (state) => {
      state.product = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.isProductLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isProductLoading = false;
        state.product = action.payload.data;
      })
      .addCase(getTopProducts.pending, (state) => {
        state.isTopLoading = true;
      })
      .addCase(getTopProducts.fulfilled, (state, action) => {
        state.isTopLoading = false;
        state.topProducts = action.payload.data;
      })
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload.data;
      });
  },
});

export const { removeOldProduct } = products.actions;

export default products.reducer;
