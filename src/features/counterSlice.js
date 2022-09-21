import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

// creating the slice
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducer: {
    increment: (state) => {
      // add 1 to the state
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

// selecting the slice
export const selectCount = (state) => state.counter.count;

// important
export default counterSlice.reducer;
