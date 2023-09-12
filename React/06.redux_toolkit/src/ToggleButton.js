// ToggleButton.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "./Slice/toggleSlice";

// useDispatch gives you access to the Redux store's dispatch function. You can use it to dispatch actions to the Redux store.
// useSelector allows you to select and read data from the Redux store. It takes a selector function as an argument and returns the selected data from the store.

const ToggleButton = () => {
  const isToggled = useSelector((state) => state.toggle.isToggled);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Toggle Button</h2>
      <p>Is Toggled: {isToggled ? "Yes" : "No"}</p>
      <button onClick={() => dispatch(toggle())}>Toggle</button>
    </div>
  );
};

export default ToggleButton;
