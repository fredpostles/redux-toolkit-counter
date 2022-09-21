import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, selectCount } from "./counterSlice";

export const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
};

export default Counter;
