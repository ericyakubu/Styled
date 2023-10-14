import { createAsyncThunk } from "@reduxjs/toolkit";
import { UsersAPI } from "../../api/Users.api";

interface UserLogin {
  email: string;
  password: string;
}

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async ({ email, password }: UserLogin) =>
    await UsersAPI.loginUser(email, password)
);
