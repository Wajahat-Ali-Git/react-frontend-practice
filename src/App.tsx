import React, { useState, useEffect } from "react";

//import HookUseEffect from "./HookUseEffect";
//import HelloFastApi from "./HelloFastApi";
import ReactProps from "./ReactProps";
//import Hooks from "./Hooks";

function App() {
  return (
    <>
      <ReactProps
        buttonName="myButton"
        buttonColor={"gray"}
        inputValue={0}
        heading="Button Component:"
      />
      <ReactProps
        buttonName="myButton1"
        buttonColor={"gray"}
        inputValue={0}
        heading="Button Component:"
      />
    </>
  );
}
export default App;
