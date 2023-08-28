import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types";
import { loginUser } from "./asyncActions";

interface initialStateType {
  isLoggedIn: boolean;
  userModals: boolean;
  loginForm: "login" | "signup" | "forgot";
  token: string | null;
  user: UserType | null;
}

const initialState: initialStateType = {
  isLoggedIn: false,
  userModals: false,
  loginForm: "login",
  token: null,
  user: null,
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoginModal: (state) => {
      state.userModals = !state.userModals;
    },
    setLoginForm: (state, action) => {
      state.loginForm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      (state.isLoggedIn = true), console.log(action.payload);
    });
  },
});

export const { setLoginModal, setLoginForm } = user.actions;

export default user.reducer;
