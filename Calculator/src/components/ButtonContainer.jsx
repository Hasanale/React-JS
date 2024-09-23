import React from "react";

function ButtonContainer({ ValueDisplay, ValueClear, ValueBack }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <button className="btn-clear-dark col-span-2" onClick={ValueClear}>
        C
      </button>{" "}
      <button
        className=" bg-gray-700  col-span-2 font-bold text-3xl"
        onClick={ValueBack}
      >
        🡄
      </button>
      {/* Number Buttons */}
      <button className="btn-dark" onClick={ValueDisplay} name="7">
        7
      </button>
      <button className="btn-dark" onClick={ValueDisplay} name="8">
        8
      </button>
      <button className="btn-dark" onClick={ValueDisplay} name="9">
        9
      </button>
      <button className="btn-operator-dark" name="/" onClick={ValueDisplay}>
        /
      </button>
      <button className="btn-dark" onClick={ValueDisplay} name="4">
        4
      </button>
      <button className="btn-dark" onClick={ValueDisplay} name="5">
        5
      </button>
      <button className="btn-dark" onClick={ValueDisplay} name="6">
        6
      </button>
      <button className="btn-operator-dark" name="*" onClick={ValueDisplay}>
        *
      </button>
      <button className="btn-dark" onClick={ValueDisplay} name="1">
        1
      </button>
      <button className="btn-dark" onClick={ValueDisplay} name="2">
        2
      </button>
      <button className="btn-dark" onClick={ValueDisplay} name="3">
        3
      </button>
      <button className="btn-operator-dark" name="-" onClick={ValueDisplay}>
        -
      </button>
      <button className="btn-dark" name="." onClick={ValueDisplay}>
        .
      </button>
      <button className="btn-dark" name="%" onClick={ValueDisplay}>
        %
      </button>
      <button className="btn-dark" name="00" onClick={ValueDisplay}>
        00
      </button>
      <button className="btn-operator-dark" name="+" onClick={ValueDisplay}>
        +
      </button>
      {/* Clear and Equals Buttons */}
      <button className="btn-dark col-span-2" onClick={ValueDisplay} name="0">
        0
      </button>
      <button
        className="btn-equals-dark col-span-2"
        onClick={ValueDisplay}
        name="="
      >
        =
      </button>
    </div>
  );
}

export default ButtonContainer;
