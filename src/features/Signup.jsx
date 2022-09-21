import React from "react";
import { setUsername, setPassword, onSignup } from "./signupSlice";
import { useDispatch } from "react-redux";

export const Signup = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h1>Sign Up:</h1>
      <div>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onInput={(e) => {
            dispatch(setUsername({ payload: e.target.value }));
          }}
        ></input>
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onInput={(e) => {
            dispatch(setPassword({ payload: e.target.value }));
          }}
        ></input>
      </div>
      <button
        onClick={() => {
          dispatch(onSignup());
        }}
      >
        Submit
      </button>
    </>
  );
};

export default Signup;
