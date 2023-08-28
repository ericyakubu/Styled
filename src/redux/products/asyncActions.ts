import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductsApi } from "../../api/Products.api";

export const getTopProducts = createAsyncThunk(
  "products/getTopProducts",
  async () => await ProductsApi.getTopProducts()
);

export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (id: string) => await ProductsApi.getProduct(id)
);
