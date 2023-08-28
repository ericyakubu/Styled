import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductsApi } from "../../api/Products.api";
import { RootState } from "..";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { getState }) => {
    const { filter: filterState } = getState() as RootState;

    return await ProductsApi.getProducts({
      pageNumber: filterState.pageNumber,
      pageSize: filterState.pageSize,
      sort: filterState.sort,
      filterCategories: filterState.filterCategories,
      filterPrices: filterState.filterPrices,
      filterSizes: filterState.filterSizes,
    });
  }
);

export const getTopProducts = createAsyncThunk(
  "products/getTopProducts",
  async () => await ProductsApi.getTopProducts()
);

export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (id: string) => await ProductsApi.getProduct(id)
);
