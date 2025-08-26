import React from "react";

const fruitlist1 = ["apple", "banana", "cherry"];

const car1 = { brand: "honda", model: "city", color: "black" };

const fruitlist2 = ["apple2", "banana", "cherry"];

const car2 = { type: "car", year: 2021 };

const fruitlist3 = [...fruitlist1, ...fruitlist2];
document.getElementById;

const cars = { car1, car2 };

const number = [4, 3, 8, 9, 99, 66];

function SpreadOperator() {
  return (
    <>
      <button
        onClick={() => {
          console.log(fruitlist3);
          console.log(cars);
          console.log(Math.min(...number));
        }}
      >
        click to check merged array
      </button>
    </>
  );
}
export default SpreadOperator;
const name = "Wajahat ali";
const age = 44;

export { name, age };
