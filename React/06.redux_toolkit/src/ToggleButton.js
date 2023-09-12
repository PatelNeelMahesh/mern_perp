// ToggleButton.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "./Slice/toggleSlice";

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
