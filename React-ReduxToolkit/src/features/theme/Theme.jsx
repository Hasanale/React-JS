import React, { useState } from "react";

function Theme() {
  const [color, setColor] = useState("white");
  return (
    <div className="justify-center flex mt-10">
      <input
        className="border-2 border-black p-2"
        type="text"
        name=""
        id=""
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button className="bg-black ml-2 text-white p-2">Change Color</button>
    </div>
  );
}

export default Theme;
