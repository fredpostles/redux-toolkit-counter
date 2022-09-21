import counterReducer from "../features/counterSlice";
import signupReducer from "../features/signupSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    signup: signupReducer,
  },
});
