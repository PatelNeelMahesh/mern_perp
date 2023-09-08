import React from "react";
import CounterFunctional from "./components/Functional";
import CounterClass from "./components/Classbased";
import State from "./hooks/UseState/State";
import Effect from "./hooks/UseEffect/Effect";
import Reducer from "./hooks/UseReducer/Reducer";
import LayoutEffect from "./hooks/UseLayoutEffect/LayoutEffect";
import Ref from "./hooks/UseRef/Ref";
import Context from "./hooks/UseContext/Contect";
import Memo from "./hooks/useMemo/Memo";
import CallBack from "./hooks/UseCallback/Callback";

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
      <Memo />
      <CallBack />
    </>
  );
}

export default Test;
