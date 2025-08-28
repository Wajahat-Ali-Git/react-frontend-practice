import React, { useCallback, useEffect, useState } from "react";

function UseCallbackHook() {
  const [num, setNum] = useState(0);
  const [value, setValue] = useState(0);
  function checkFunc() {
    console.log("i am rendering");
  }

  const handleIncrement1 = () => setNum(num + 1);
  const handleIncrement2 = () => {
    setValue(Math.random);
    console.log(value);
  };
  return (
    <>
      <button onClick={() => handleIncrement1}>click me</button>
    </>
  );
}
export default UseCallbackHook;
