import { useState, memo } from "react";
//import ComponentC from "./ComponentC";

const ChildFunc = memo(({ onClick }) => {
  console.log(`child rendered ${Math.random()}`);
  return (
    <div className="">
      console.log(`child rendered `)
      <button onClick={onClick}>Click me</button>
    </div>
  );
});

export default ChildFunc;
