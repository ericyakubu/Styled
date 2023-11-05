import { createSlice } from "@reduxjs/toolkit";
import { ProductType, ProductsType } from "../../types";
import { getProduct, getTopProducts } from "./asyncActions";
import { getProducts } from "../filter/asyncActions";

interface initialStateType {
  isLoading: boolean;
  isTopLoading: boolean;
  isProductLoading: boolean;

  product?: ProductType;
  topProducts: ProductsType[];
  products: ProductsType[];
}

const initialState: initialStateType = {
  isLoading: false,
  isTopLoading: false,
  isProductLoading: false,

  topProducts: [],
  products: [],
};

export const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    removeOldProduct: (state) => {
      delete state.product;
    },
    removeOldProducts: (state) => {
      state.products = [];
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

        if (!state.products.length) {
          state.products = action.payload.data;
        } else {
          action.payload.data.forEach((e: ProductsType) => {
            const i = state.products.findIndex((prod) => prod.id === e.id);
            if (i === -1) state.products.push(e);
          });
        }
      });
  },
});

export const { removeOldProduct, removeOldProducts } = products.actions;

export default products.reducer;
