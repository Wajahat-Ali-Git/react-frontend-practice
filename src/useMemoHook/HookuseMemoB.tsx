import React, { useState } from "react";
const HookuseMemoB = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 10000000; i++) {
    num++;
  }
  return num;
};
export default HookuseMemoB;
