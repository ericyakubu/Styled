import axios from "axios";

import { apiConfig } from "./index";
import { filterType } from "../types";

interface getProductsType {
  pageNumber: number;
  pageSize: number | null;
  onSale: boolean;
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

export const ProductsApi = {
  getProduct(id: string) {
    return axios.get(`${apiConfig.products}/${id}`).then((res) => res.data);
  },
  getTopProducts: async () => {
    return axios
      .get(`${apiConfig.products}/top-5-cheap`)
      .then((res) => res.data);
  },
  getProducts: async ({
    pageNumber,
    pageSize,
    sort,
    onSale,
    filters,
  }: getProductsType) => {
    let queryParams = `?page=${pageNumber}`;
    const { name, sizes, categories, prices } = filters;

    queryParams += pageSize ? `&limit=${pageSize}` : "";
    queryParams += sort ? `&sort=${sort}` : "";
    queryParams += onSale ? `&onSale=true` : "";

    queryParams += name ? `&name=${name}` : "";
    queryParams += prices.min ? `&price[gte]=${prices.min}` : "";
    queryParams += prices.max ? `&price[lte]=${prices.max}` : "";
    queryParams += sizes ? `${sizes.map((size) => `&sizes=${size}`)}` : "";
    queryParams += categories
      ? `${categories.map((category) => `&category=${category}`)}`
      : "";

    return axios
      .get(`${apiConfig.products}${queryParams}`)
      .then((res) => res.data);
  },
};
