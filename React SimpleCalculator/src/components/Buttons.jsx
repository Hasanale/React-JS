import React from "react";
import useCalculate from "../contexts/CalculateContext";
function Buttons({ name, className, onClick, value }) {
  const { ValueDisplay } = useCalculate();

  return (
    <button
      className={className}
      name={name}
      onClick={onClick ? onClick : ValueDisplay}
    >
      {name}
      {value}
    </button>
  );
}

export default Buttons;
