import React from "react";
import CounterFunctional from "./components/Functional";
import CounterClass from "./components/Classbased";
import State from "./hooks/UseState/State";
import Effect from "./hooks/UseEffect/Effect";
import Reducer from "./hooks/UseReducer/Reducer";
import LayoutEffect from "./hooks/UseLayoutEffect/LayoutEffect";
import Ref from "./hooks/UseRef/Ref";
import Context from "./hooks/UseContext/Contect";

function Test() {
  return (
    <>
      <CounterFunctional />
      <CounterClass />
      <State />
      <Effect />
      <Reducer />
      <LayoutEffect />
      <Ref />
      <Context />
    </>
  );
}

export default Test;
