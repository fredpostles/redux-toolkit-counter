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
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    onSignup: (state) => {
      const userId = Math.random();
      state.id = userId;
    },
  },
});

export const { setUsername, setPassword, onSignup } = signupSlice.actions;

// selecting the slice
export const selectUsername = (state) => state.signup.userName;

// important
export default signupSlice.reducer;
