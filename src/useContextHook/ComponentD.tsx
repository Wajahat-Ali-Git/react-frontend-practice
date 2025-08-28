import React, { useContext, useEffect, useState } from "react";
import { userContext } from "./ComponentA";

interface userValues {
  a: number;
}

function ComponentD(prop: userValues) {
  useEffect(() => {
    console.log(`i got rendered ${Math.random()}`);
  });
  let b = useContext(userContext);

  return (
    <div className="box">
      <h1>
        value of a is {prop.a},{b}
        <br />
        sum: {prop.a + b}
      </h1>
    </div>
  );
}
export default ComponentD;
