import React from "react";
import { useEffect, useState } from "react";

function HookUseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  let a = 0;

  useEffect(() => {
    const timeoutCheck = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearTimeout(timeoutCheck); //could have  used return as e.g return ()=> clearTimeout(timeoutCheck)
    console.log(count);
  });
  return (
    <>
      <h1>{count}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <p>{name}</p>
      <p>value of a: {a}</p>
      {console.log(a)}
      <button
        onClick={() => {
          a = a + 1;
          console.log(a);
        }}
      >
        add in value of a
      </button>
    </>
  );
}
export default HookUseEffect;
