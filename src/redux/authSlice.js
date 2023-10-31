import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
    },
    signOut: (state) => {
      state.user = null;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;
