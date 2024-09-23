import React from "react";
import useCalculate from "../contexts/CalculateContext";
function Buttons({ name, className }) {
  const { ValueDisplay } = useCalculate();

  return (
    <button className={className} name={name} onClick={ValueDisplay}>
      {name}
    </button>
  );
}

export default Buttons;
