import React from "react";
import Image1 from "./../../assets/1693476739453.jpeg";
function Phd() {
  return (
    <div className="flex gap-10 justify-center">
      <div className="w-[350px] h-[300px] border-2 border-white text-white text-center p-5">
        <h1 className="text-2xl font-bold p-2">BS Computer Science</h1>
        <h3>Faculty computing and Information technology</h3>
        <img src={Image1} alt="" className="max-w-[150px] m-auto pt-5" />
        <p></p>
      </div>
    </div>
  );
}

export default Phd;
