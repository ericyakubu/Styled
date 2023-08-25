import axios from "axios";

import { apiConfig } from "./index";
// import { ProductType, ProductsType } from "../types";

export const ProductsApi = {
  getProduct(id: string) {
    return axios.get(`${apiConfig.products}/${id}`).then((res) => res.data);
  },
  getTopProducts: async () => {
    return axios
      .get(`${apiConfig.products}/top-5-cheap`)
      .then((res) => res.data);
  },
  getProducts: async () => {
    return axios.get(`${apiConfig.products}`).then((res) => res.data);
  },
};
