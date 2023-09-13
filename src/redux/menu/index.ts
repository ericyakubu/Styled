import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
  openMenu: boolean;
}

const initialState: initialStateType = {
  openMenu: false,
};

export const menuRedux = createSlice({
  name: "menuRedux",
  initialState,
  reducers: {
    setOpenMenu: (state, action) => {
      state.openMenu = action.payload;
    },
  },
});

export const { setOpenMenu } = menuRedux.actions;

export default menuRedux.reducer;
