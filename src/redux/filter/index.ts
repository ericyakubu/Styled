import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../filter/asyncActions";
import { SortCategories } from "../../constants";

interface initialStateType {
  pageNumber: number;
  pageSize: number | null;
  productsNumber: number;

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
  setSortCategory,
} = filterRedux.actions;

export default filterRedux.reducer;
