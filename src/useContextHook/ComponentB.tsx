import { useState } from "react";
import ComponentC from "./ComponentC";
interface userValues {
  a: number;
}

function ComponentB(prop: userValues) {
  return (
    <div className="box">
      <h1>value of a is {prop.a}</h1>
      <ComponentC a={prop.a} />
    </div>
  );
}
export default ComponentB;
