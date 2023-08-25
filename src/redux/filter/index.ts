import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../products/asyncActions";
import { SortCategories } from "../../constants";

interface initialStateType {
  pageNumber: number;
  productsNumber: number;

  sortCategory: string | null;
  filterCategories: string[];
  filterSizes: string[];
  filterPrices: {
    min: number;
    max: number;
  };
}

const initialState: initialStateType = {
  pageNumber: 1,
  productsNumber: 0,

  sortCategory: null,
  filterCategories: [],
  filterSizes: [],
  filterPrices: {
    min: 0,
    max: 999999999999999,
  },
};

export const filterRedux = createSlice({
  name: "filterRedux",
  initialState,
  reducers: {
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
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
      if (action.payload === SortCategories.SORT_BY) {
        state.sortCategory = "";
      } else {
        state.sortCategory = action.payload;
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
  setSortCategory,
} = filterRedux.actions;

export default filterRedux.reducer;
