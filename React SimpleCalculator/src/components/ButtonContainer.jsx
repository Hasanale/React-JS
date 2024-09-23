import React from "react";
import Buttons from "./Buttons";
import useCalculate from "../contexts/CalculateContext";
import { FaBackspace } from "react-icons/fa";

function ButtonContainer() {
  const { ValueBack, ValueClear } = useCalculate();

  return (
    <div className="grid grid-cols-4 gap-4">
      <Buttons className="btn-operator-dark" name={"-"} />
      <Buttons className="btn-operator-dark" name={"+"} />
      <Buttons className="btn-operator-dark" name={"/"} />
      <Buttons className="btn-operator-dark" name={"*"} />

      {/* Number Buttons */}
      <Buttons className="btn-dark" name={"7"} />
      <Buttons className="btn-dark" name={"8"} />
      <Buttons className="btn-dark" name={"9"} />
      <Buttons
        className="btn-dark"
        onClick={ValueBack}
        value={<FaBackspace />}
      />

      <Buttons className="btn-dark" name={"4"} />
      <Buttons className="btn-dark" name={"5"} />
      <Buttons className="btn-dark" name={"6"} />
      <Buttons className="btn-clear-dark" onClick={ValueClear} value={"C"} />

      <Buttons className="btn-dark" name={"1"} />
      <Buttons className="btn-dark" name={"2"} />
      <Buttons className="btn-dark" name={"3"} />

      {/* Clear and Equals Buttons */}
      <Buttons className="btn-equals-dark row-span-2" name={"="} />

      <Buttons className="btn-dark " name={"0"} />
      <Buttons className="btn-dark" name={"."} />
      <Buttons className="btn-dark" name={"%"} />
    </div>
  );
}

export default ButtonContainer;
