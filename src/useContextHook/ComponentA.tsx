import { useState, useContext, createContext } from "react";
//import CompomentB from "./ComponentB";
import "../index.css";
import ComponentB from "./ComponentB";
export const userContext = createContext(0);

function ComponentA() {
  const [value, setValue] = useState(0);
  let a = 10;
  let b = 20;
  return (
    <div className="box">
      <h1>
        value of a is {a} ,{b}
        <button onClick={() => setValue(2)}>Button1</button>
      </h1>
      <userContext.Provider value={b}>
        <ComponentB a={a} />
      </userContext.Provider>
    </div>
  );
}
export default ComponentA;
