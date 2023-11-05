import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../filter/asyncActions";
import { SortCategories } from "../../constants";
import { filterType } from "../../types";

interface initialStateType {
  pageNumber: number;
  pageSize: number | null;
  productsNumber: number;
  onSale: boolean;
  showMore: boolean;

  sort: string | null;
  filters: filterType;
}

const initialState: initialStateType = {
  pageNumber: 1,
  pageSize: null,
  productsNumber: 0,
  onSale: false,
  showMore: true,

  sort: null,
  filters: {
    name: "",
    categories: [],
    sizes: [],
    prices: {
      min: null,
      max: null,
    },
  },
};

export const filterRedux = createSlice({
  name: "filterRedux",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
      state.showMore = true;
    },
    setShowMore: (state) => {
      state.showMore = !state.showMore;
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
      state.showMore = true;
    },
    setFilterName: (state, action) => {
      state.filters.name = action.payload;
      state.showMore = true;
    },
    setFilterSale: (state, action) => {
      state.onSale = action.payload;
      state.showMore = true;
    },
    setSortCategory: (state, action) => {
      if (action.payload === SortCategories.SORT_BY) {
        state.sort = "";
      } else {
        state.sort = action.payload;
      }
      state.showMore = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      if (
        (state.pageSize && action.payload.results >= state.pageSize) ||
        action.payload.results >= 18
      ) {
        state.showMore = true;
      } else {
        state.showMore = false;
      }
    });
  },
});

export const {
  setFilters,
  setShowMore,
  setPageNumber,
  setSortCategory,
  setFilterSale,
  setFilterName,
} = filterRedux.actions;

export default filterRedux.reducer;
