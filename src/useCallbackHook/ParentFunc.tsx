import React, { useState, useCallback, memo } from "react";

// Child component (memoized)
const Child = memo(({ onClick }) => {
  console.log("👶 Child rendered");
  return <button onClick={onClick}>Click Child Button</button>;
});

const Child2 = memo(({ onClick }) => {
  console.log("👶 Child2 rendered");
  return <button onClick={onClick}>Click Child Button</button>;
});

function ParentFunc() {
  const [count, setCount] = useState(0);

  // ✅ useCallback ensures this function is stable (doesn't get recreated every render)
  const handleClick = useCallback(() => {
    console.log("Child button clicked!");
    console.log(Math.random());
  }, []);

  const handleClick2 = () => {
    console.log("Child button2 clicked!");
    console.log(Math.random());
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <Child onClick={handleClick} />
      <Child2 onClick={handleClick2} />
    </div>
  );
}

export default ParentFunc;
