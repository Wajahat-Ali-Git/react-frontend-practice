import React, { useState, useCallback, memo } from "react";

const Child = memo(({ handleSub }) => {
  console.log("child render");
  return (
    <>
      <button onClick={handleSub}>subtract</button>
    </>
  );
});

function ExampleB() {
  const [value, setValue] = useState(0);
  const handleIncrement = () => {
    setValue((v) => v + 1);
    console.log("handle increment rendered");
  };
  const handleSub = useCallback(() => {
    setValue((v) => v - 1);
    console.log("handle decrement rendered");
    console.log(`${value}`);
  }, [value]);
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={handleIncrement}>Add</button>
      <Child handleSub={handleSub} />
    </div>
  );
}
export default ExampleB;
