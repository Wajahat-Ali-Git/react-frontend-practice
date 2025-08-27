import React, { useState } from "react";
interface userProps {
  buttonName: string;
  buttonColor: string;
  inputValue: number;
  heading: string;
}

const ReactProps = (prop: userProps) => {
  const { buttonColor = "red", inputValue, buttonName, heading } = prop;
  return (
    <>
      <h1>{heading}</h1>
      <button style={{ color: buttonColor }}>{buttonName}</button>
      <input type="text" value={inputValue} />
    </>
  );
};
export default ReactProps;
