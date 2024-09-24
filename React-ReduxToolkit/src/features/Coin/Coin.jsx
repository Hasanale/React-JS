import React from "react";
import { useSelector } from "react-redux";

function Coin() {
  const count = useSelector((state) => state.counter.count);
  return (
    <div className="justify-center flex bg-gray-300 m-auto p-2  rounded-lg w-fit">
      Coin: {count}
    </div>
  );
}

export default Coin;
