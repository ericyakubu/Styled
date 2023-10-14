import axios from "axios";
import { apiConfig } from "./index";

export const UsersAPI = {
  loginUser: async (email: string, password: string) => {
    return axios.post(`${apiConfig.users}/login`, { email, password });
  },
};
