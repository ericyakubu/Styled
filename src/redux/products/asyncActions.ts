import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductsApi } from "../../api/Products.api";
// import { RootState } from "../index";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => await ProductsApi.getProducts()
);

export const getTopProducts = createAsyncThunk(
  "products/getTopProducts",
  async () => await ProductsApi.getTopProducts()
);

export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (id: string) => await ProductsApi.getProduct(id)
);
