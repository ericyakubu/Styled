import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../filter/asyncActions";
import { SortCategories } from "../../constants";

interface initialStateType {
  pageNumber: number;
  pageSize: number | null;
  productsNumber: number;
  onSale: boolean;

  sort: string | null;
  filterCategories: string[];
  filterSizes: string[];
  filterPrices: {
    min: number | null;
    max: number | null;
  };
}

const initialState: initialStateType = {
  pageNumber: 1,
  pageSize: null,
  productsNumber: 0,
  onSale: false,

  sort: null,
  filterCategories: [],
  filterSizes: [],
  filterPrices: {
    min: null,
    max: null,
  },
};

export const filterRedux = createSlice({
  name: "filterRedux",
  initialState,
  reducers: {
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    setFilterPrices: (state, action) => {
      if (action.payload[0] === "min")
        state.filterPrices.min = action.payload[1];
      if (action.payload[0] === "max")
        state.filterPrices.max = action.payload[1];
    },
    setFilterCategories: (state, action) => {
      if (state.filterCategories.includes(action.payload)) {
        state.filterCategories = state.filterCategories.filter(
          (cat) => cat !== action.payload
        );
      } else {
        state.filterCategories = [...state.filterCategories, action.payload];
      }
    },
    setFilterSale: (state, action) => {
      state.onSale = action.payload;
    },
    setFilterSizes: (state, action) => {
      if (state.filterSizes.includes(action.payload)) {
        state.filterSizes = state.filterSizes.filter(
          (size) => size !== action.payload
        );
      } else {
        state.filterSizes = [...state.filterSizes, action.payload];
      }
    },
    setSortCategory: (state, action) => {
      console.log(action.payload);
      if (action.payload === SortCategories.SORT_BY) {
        state.sort = "";
      } else {
        state.sort = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.productsNumber = action.payload.results;
    });
  },
});

export const {
  setPageNumber,
  setFilterCategories,
  setFilterSizes,
  setFilterPrices,
  setSortCategory,
  setFilterSale,
} = filterRedux.actions;

export default filterRedux.reducer;
