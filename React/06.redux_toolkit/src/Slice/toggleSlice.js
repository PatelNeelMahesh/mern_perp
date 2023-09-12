// toggleSlice.js
import { createSlice } from "@reduxjs/toolkit";
// createSlice simplifies the process of creating Redux slices. A slice includes a reducer, action creators, and an initial state. It's used to define a part of your Redux store's state and logic.

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    isToggled: false,
  },
  reducers: {
    toggle: (state) => {
      state.isToggled = !state.isToggled;
    },
  },
});

export const { toggle } = toggleSlice.actions;
export default toggleSlice.reducer;
