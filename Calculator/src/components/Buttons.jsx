import React from "react";

function Buttons({ name, ValueDisplay, className }) {
  return (
    <button className={className} name={name} onClick={ValueDisplay}>
      {name}
    </button>
  );
}

export default Buttons;
