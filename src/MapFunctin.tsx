import React from "react";
import { name, age } from "./SpreadOperator";

const fruitlist = ["apple", "banana", "cherry"];

function MapFunction() {
  return (
    <>
      <ul>
        {fruitlist.map((e1, index, array) => (
          <li>
            fruit name: {name} {e1} , index: {index} , array: {array}
          </li>
        ))}
      </ul>
    </>
  );
}
export default MapFunction;
