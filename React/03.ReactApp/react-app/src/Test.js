import React from "react";
import CounterFunctional from "./components/Functional";
import CounterClass from "./components/Classbased";
import State from "./hooks/UseState/State";
import Effect from "./hooks/UseEffect/Effect";
import Reducer from "./hooks/UseReducer/Reducer";
import LayoutEffect from "./hooks/UseLayoutEffect/LayoutEffect";

function Test() {
  return (
    <>
      <CounterFunctional />
      <CounterClass />
      <State />
      <Effect />
      <Reducer />
      <LayoutEffect />
    </>
  );
}

export default Test;
