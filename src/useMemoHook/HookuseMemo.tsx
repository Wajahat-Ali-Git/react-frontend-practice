import React, { useState, useMemo } from "react";
import HookuseMemoB from "./HookuseMemoB";

const HookuseMemo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(["ali", "haider"]);

  const result = useMemo(() => HookuseMemoB(count), [count]);
  return (
    <div style={{ font: "32px" }}>
      <h1 style={{ font: "32px", color: "black" }}>use Memo hook example</h1>

      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button onClick={() => setCount(count)}>set name equal to Ali</button>

      <p>{result}</p>

      <button onClick={() => setName([...name, "lai"])}>
        Set name equal to Ali
      </button>
      <ul>{name}</ul>
    </div>
  );
};

export default HookuseMemo;
