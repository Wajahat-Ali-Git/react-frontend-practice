import React, { useState, useCallback, memo } from "react";

const Child = memo(({ handleSetValue }) => {
  console.log("child rendered");

  return (
    <>
      <button onClick={handleSetValue()}>Set name equal to default</button>
    </>
  );
});

function ExampleC() {
  const [name1, setName] = useState("");
  const [value, setValue] = useState(0);
  const handleSetName = () => {
    setName("Wajahat Ali");
    console.log("skslnxk");
  };

  const handleSetValue = (e) => {
    setValue(e);
    console.log("cnjdnd");
  };

  return (
    <div style={{ justifyItems: "center" }}>
      <button onClick={handleSetName}>Set name equal to Wajahat Ali</button>
      <button onClick={handleSetValue}>change value</button>
      {name1}
      <Child handleSetValue={handleSetValue} />
    </div>
  );
}
export default ExampleC;
