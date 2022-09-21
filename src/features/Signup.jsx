import React from "react";
import { setUsername } from "./signupSlice";
import { useDispatch } from "react-redux";

export const Signup = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h1>Sign Up:</h1>
      <input
        type="text"
        placeholder="Enter username"
        onInput={(e) => {
          dispatch(setUsername({ payload: e.target.value }));
        }}
      ></input>
    </>
  );
};

export default Signup;
