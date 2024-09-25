import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../counter/counterSlice";
function Counter() {
  const count = useSelector((state) => state.counter.count);
  const colorr = useSelector((state) => state.colorchanger.color);

  const [check, setCheck] = useState("");
  const dispatch = useDispatch();
  return (
    <div
      style={{ background: colorr }}
      className=" border-2 border-black flex m-auto rounded-xl p-8 mb-4 items-center flex-col w-[50%]"
    >
      <p className="text-3xl">Counter</p>
      <div className="flex items-center">
        <button
          className="rounded-lg bg-black text-white p-2 m-4"
          onClick={() => {
            dispatch(increment());
          }}
        >
          Add
        </button>
        <p>{count}</p>
        <button
          className="rounded-lg bg-black text-white p-2 m-4"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Remove
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
