import React from "react";

function TernaryOperator() {
  let a = 1;
  if (a === 10) {
    true;
  } else {
    false;
  }

  return (
    <>
      <h1>ternary operators</h1>
      {a === 10 ? (
        <p>the variable is declared to 10</p>
      ) : a <= 10 ? (
        <p>elss than 10</p>
      ) : (
        <p>it will be greater than 10 </p>
      )}
      <h1>&& operators</h1>
      {a !== 1 && <p>add operator works</p>}
    </>
  );
}
export default TernaryOperator;
