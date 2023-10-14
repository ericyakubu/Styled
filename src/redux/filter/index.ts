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

  filterName: string;
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
  filterName: "",
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
      state.filterName = action.payload;
      state.showMore = true;
    },
    setFilterPrices: (state, action) => {
      if (action.payload[0] === "min")
        state.filterPrices.min = action.payload[1];
      if (action.payload[0] === "max")
        state.filterPrices.max = action.payload[1];
      state.showMore = true;
    },
    setFilterCategories: (state, action) => {
      state.filterCategories = action.payload;
    },
    setFilterSale: (state, action) => {
      state.onSale = action.payload;
      state.showMore = true;
    },
    setFilterSizes: (state, action) => {
      state.filterSizes = action.payload;
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
  setFilterCategories,
  setFilterSizes,
  setFilterPrices,
  setSortCategory,
  setFilterSale,
  setFilterName,
} = filterRedux.actions;

export default filterRedux.reducer;
