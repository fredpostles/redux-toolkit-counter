import React from "react";
import { setUsername } from "./signupSlice";
import { useDispatch } from "react-redux";

export const Signup = () => {
  const dispatch = useDispatch();

  return (
    <>
      <input
        type="text"
        onInput={(e) => {
          dispatch(setUsername({ payload: e.target.value }));
        }}
      ></input>
    </>
  );
};

export default Signup;
