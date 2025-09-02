import React, { useState, useEffect, useReducer } from "react";

const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case "ali":
      return { ...state, name: "Ali", hasError: null };
      console.log(name);
  }

  return state;
};

function HookUseReducer() {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    hasError: "Error no Name set",
  });

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "98vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <h1 style={{ color: "red" }}>{state.hasError}</h1>
        <button onClick={() => dispatch({ type: "ali" })}>
          Click to set Name to Ali to remove error
        </button>
        <p
          style={{
            fontSize: "28px",
          }}
        >
          Name:{state.name}
        </p>
      </div>
    </div>
  );
}
export default HookUseReducer;
