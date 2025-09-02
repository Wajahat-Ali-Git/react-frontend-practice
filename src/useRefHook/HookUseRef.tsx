import React, { useState, useEffect, useRef } from "react";

function HookUseRef() {
  const inputFocusRef = useRef(null);
  const inputUserRef = useRef(null);
  return (
    <>
      <input type="text" ref={inputFocusRef} />
      <button onClick={() => inputFocusRef.current.focus()}>
        Focus on input field
      </button>
    </>
  );
}
export default HookUseRef;
