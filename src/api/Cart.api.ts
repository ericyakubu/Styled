import axios from "axios";
import { apiConfig } from ".";
import { CartItemType } from "../types";

export const CartApi = {
  immediateCheckout: async (products: CartItemType[]) => {
    return axios
      .post(`${apiConfig.checkout}/checkout-now/`, { products })
      .then((res) => res.data);
  },
};
