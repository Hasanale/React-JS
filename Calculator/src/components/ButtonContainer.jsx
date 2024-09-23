import React from "react";
import Buttons from "./Buttons";

function ButtonContainer({ ValueDisplay, ValueClear, ValueBack }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <button className="btn-clear-dark " onClick={ValueClear}>
        C
      </button>
      <Buttons className="btn-dark" name={"%"} ValueDisplay={ValueDisplay} />

      <button className=" bg-gray-700   font-bold text-3xl" onClick={ValueBack}>
        🡄
      </button>

      <Buttons
        className="btn-operator-dark"
        name={"/"}
        ValueDisplay={ValueDisplay}
      />
      {/* Number Buttons */}
      <Buttons className="btn-dark" name={"7"} ValueDisplay={ValueDisplay} />
      <Buttons className="btn-dark" name={"8"} ValueDisplay={ValueDisplay} />
      <Buttons className="btn-dark" name={"9"} ValueDisplay={ValueDisplay} />
      <Buttons
        className="btn-operator-dark"
        name={"*"}
        ValueDisplay={ValueDisplay}
      />

      <Buttons className="btn-dark" name={"4"} ValueDisplay={ValueDisplay} />
      <Buttons className="btn-dark" name={"5"} ValueDisplay={ValueDisplay} />
      <Buttons className="btn-dark" name={"6"} ValueDisplay={ValueDisplay} />
      <Buttons
        className="btn-operator-dark"
        name={"-"}
        ValueDisplay={ValueDisplay}
      />

      <Buttons className="btn-dark" name={"1"} ValueDisplay={ValueDisplay} />
      <Buttons className="btn-dark" name={"2"} ValueDisplay={ValueDisplay} />
      <Buttons className="btn-dark" name={"3"} ValueDisplay={ValueDisplay} />
      <Buttons
        className="btn-operator-dark"
        name={"+"}
        ValueDisplay={ValueDisplay}
      />

      {/* Clear and Equals Buttons */}
      <Buttons className="btn-dark " name={"0"} ValueDisplay={ValueDisplay} />
      <Buttons className="btn-dark" name={"."} ValueDisplay={ValueDisplay} />

      <Buttons
        className="btn-equals-dark col-span-2"
        name={"="}
        ValueDisplay={ValueDisplay}
      />
    </div>
  );
}

export default ButtonContainer;
