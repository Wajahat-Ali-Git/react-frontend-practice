import React from "react";

const marks = [0, 99.88, 22, 44, 33.1];
const passedMarks = marks.filter((e) => {
  return e >= 33;
});

function FilterFunction() {
  return (
    <>
      <ul>
        {passedMarks.map((value) => (
          <li>{value}</li>
        ))}
      </ul>
    </>
  );
}
export default FilterFunction;
