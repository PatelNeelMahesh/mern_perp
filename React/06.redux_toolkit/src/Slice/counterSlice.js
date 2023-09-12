// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";
// createSlice simplifies the process of creating Redux slices. A slice includes a reducer, action creators, and an initial state. It's used to define a part of your Redux store's state and logic.

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
