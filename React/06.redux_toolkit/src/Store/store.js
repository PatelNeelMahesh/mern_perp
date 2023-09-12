// store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Slice/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
