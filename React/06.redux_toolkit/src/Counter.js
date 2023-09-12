// Counter.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./Slice/counterSlice";

// useDispatch gives you access to the Redux store's dispatch function. You can use it to dispatch actions to the Redux store.
// useSelector allows you to select and read data from the Redux store. It takes a selector function as an argument and returns the selected data from the store.

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
