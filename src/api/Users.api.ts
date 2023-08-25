import axios from "axios";
import { apiConfig } from "./index";

export const UsersAPI = {
  loginUser: async () => {
    return axios.put(`${apiConfig.users}`);
  },
};
