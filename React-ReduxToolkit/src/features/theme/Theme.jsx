import React, { useState } from "react";
import { changeColor, changeBg } from "./themeSlice";
import { useDispatch } from "react-redux";
function Theme() {
  const [color, setColor] = useState("");
  const [colorone, setColorone] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <div className="justify-center flex mt-10">
        <input
          className="border-2 border-black p-2"
          placeholder="Add color"
          type="text"
          name=""
          id=""
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button
          className="bg-black ml-2 text-white p-2 rounded-xl  "
          onClick={() => dispatch(changeColor(color))}
        >
          Change Counter Color
        </button>
      </div>
      <div className="justify-center flex mt-10">
        <input
          className="border-2 border-black p-2"
          placeholder="Add color"
          type="text"
          name=""
          id=""
          value={colorone}
          onChange={(e) => setColorone(e.target.value)}
        />
        <button
          className="bg-black ml-2 text-white p-2 rounded-xl"
          onClick={() => dispatch(changeBg(colorone))}
        >
          Change Body Color
        </button>
      </div>
    </>
  );
}

export default Theme;
