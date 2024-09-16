import React from "react";
import Image2 from "./../../assets/maxresdefault.jpg";
function Graduate() {
  return (
    <div className="flex gap-10 ml-10">
      <div className="w-[350px] h-[300px] border-2 border-white text-white text-center p-5">
        <h1 className="text-2xl font-bold p-2">BS Information Technology</h1>
        <h3>Faculty computing and Information technology</h3>
        <img src={Image2} alt="" className="max-w-[150px] m-auto pt-5" />
        <p></p>
      </div>
    </div>
  );
}

export default Graduate;
