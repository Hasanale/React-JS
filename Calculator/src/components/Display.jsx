import React from "react";
import useCalculate from "../contexts/CalculateContext";
function Display() {
  const { display } = useCalculate();

  return (
    <>
      <input
        className="  bg-gray-800 h-[60px] text-white w-full text-4xl font-mono p-4 mb-6 text-right rounded-lg shadow-inner"
        value={display}
      />
    </>
  );
}

export default Display;
