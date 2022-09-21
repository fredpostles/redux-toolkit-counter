import { createSlice } from "@reduxjs/toolkit";

const initialState = { userName: "" };

// creating the slice
export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { setUsername } = signupSlice.actions;

// selecting the slice
export const selectUsername = (state) => state.signup.userName;

// important
export default signupSlice.reducer;
