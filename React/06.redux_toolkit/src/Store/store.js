// store.js
// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../Slice/counterSlice";

// const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

// export default store;

// store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Slice/counterSlice";
import toggleReducer from "../Slice/toggleSlice";

const initialState = {
  counter: {
    value: 0,
  },
  toggle: {
    isToggled: false,
  },
  user: {
    name: "User",
    email: "user@redux.com",
  },
};

const store = configureStore({
  reducer: {
    counter: counterReducer,
    toggle: toggleReducer,
  },
  preloadedState: initialState, // Initialize the state here
});

export default store;
