import React from "react";
import CounterFunctional from "./components/Functional";
import CounterClass from "./components/Classbased";
import State from "./hooks/UseState/State";
import Effect from "./hooks/UseEffect/Effect";

function Test() {
  return (
    <>
      <CounterFunctional />
      <CounterClass />
      <State />
      <Effect />
    </>
  );
}

export default Test;
