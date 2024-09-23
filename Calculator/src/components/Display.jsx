import React from "react";

function Display({ display }) {
  return (
    <>
      <input
        className="bg-gray-800 h-[60px] text-white w-full text-4xl font-mono p-4 mb-6 text-right rounded-lg shadow-inner"
        value={display}
      />
    </>
  );
}

export default Display;
