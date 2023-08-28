import axios from "axios";
import { apiConfig } from ".";
import { CartItemType } from "../types";

export const CartApi = {
  immediateCheckout: async (products: CartItemType[]) => {
    return (
      axios
        // .get(`${apiConfig.checkout}/checkout-now/${id}`)
        .post(`${apiConfig.checkout}/checkout-now/`, { products })
        .then((res) => res.data)
    );
  },
};
