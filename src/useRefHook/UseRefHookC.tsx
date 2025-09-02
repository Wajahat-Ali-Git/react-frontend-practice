import React, { useState, useEffect, useRef } from "react";

function UseRefHookC() {
  const inputValueRef = useRef(null);
  return (
    <>
      <h1 onClick={() => (inputValueRef.current.type = "radio")}>Clickme</h1>{" "}
      {/* changes the nput type using ref=inputValueRef using useRef hook */}
      <input type="text" ref={inputValueRef} />
    </>
  );
}
export default UseRefHookC;
