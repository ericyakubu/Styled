import axios from "axios";

import { apiConfig } from "./index";

interface getProductsType {
  pageNumber: number;
  pageSize: number | null;
  onSale: boolean;
  sort: string | null;
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
    filterCategories,
    filterPrices,
    filterSizes,
  }: getProductsType) => {
    let queryParams = `?page=${pageNumber}`;

    //set page limit and sorting
    queryParams += pageSize ? `&limit=${pageSize}` : "";
    queryParams += sort ? `&sort=${sort}` : "";
    queryParams += onSale ? `&onSale=true` : "";
    //filter by prices
    queryParams += filterPrices.min ? `&price[gte]=${filterPrices.min}` : "";
    queryParams += filterPrices.max ? `&price[lte]=${filterPrices.max}` : "";

    //filter by sizes and categories
    queryParams += filterSizes
      ? `${filterSizes.map((size) => `&sizes=${size}`)}`
      : "";
    queryParams += filterCategories
      ? `${filterCategories.map((category) => `&category=${category}`)}`
      : "";

    return axios
      .get(`${apiConfig.products}` + queryParams)
      .then((res) => res.data);
  },
};
