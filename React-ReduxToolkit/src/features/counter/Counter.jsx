import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";
function Counter() {
  const count = useSelector((state) => state.counter.count);
  const [check, setCheck] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center flex-col">
      <p className="text-3xl">Counter</p>
      <div className="flex items-center">
        <button
          className="rounded-lg bg-black text-white p-2 m-4"
          onClick={() => {
            dispatch(increment());
          }}
        >
          Add Value
        </button>
        <p>{count}</p>
        <button
          className="rounded-lg bg-black text-white p-2 m-4"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Remove Value
        </button>
        <input
          className="border-2 w-fit border-black p-2"
          placeholder="Add increament value"
          type="text"
          value={check}
          onChange={(e) => setCheck(e.target.value)}
          name=""
          id=""
        />
        <button
          className="rounded-lg bg-black text-white p-2 m-4"
          onClick={() => {
            dispatch(incrementByAmount(parseInt(check)));
          }}
        >
          Add Value
        </button>
      </div>
    </div>
  );
}

export default Counter;
