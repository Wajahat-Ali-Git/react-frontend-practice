import { useState } from "react";
import ComponentD from "./ComponentD";
interface userValues {
  a: number;
}

function ComponentC(prop: userValues) {
  return (
    <div className="box">
      <h1>value of a is {prop.a}</h1>
      <ComponentD a={prop.a} />
    </div>
  );
}
export default ComponentC;
