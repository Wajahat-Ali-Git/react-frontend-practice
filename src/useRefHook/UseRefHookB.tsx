import React, { useState, useEffect, useRef } from "react";

function UseRefHookB() {
  const inputValueRef = useRef("");
  const [count, setCount] = useState("");

  useEffect(() => {
    inputValueRef.current = count;
  }, [count]);

  return (
    <>
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <h1>current value: {count}</h1>
      <h1>previous value: {inputValueRef.current}</h1>
    </>
  );
}
export default UseRefHookB;
