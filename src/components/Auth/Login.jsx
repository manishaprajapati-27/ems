import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Email is", email);
    console.log("Password is", password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="border-2 border-emerald-300 rounded-xl p-20">
        <form
          action=""
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="border-2 mb-2 border-emerald-400 rounded-full py-4 px-5 text-xl text-white outline-none bg-transparent placeholder:text-grey-400"
            placeholder="Enter Your Email"
          />
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="border-2 mb-2 border-emerald-400 rounded-full py-4 px-5 text-xl text-white outline-none bg-transparent placeholder:text-grey-400"
            placeholder="Enter Your Password"
          />
          <button className="bo rder-none mt-3 w-full bg-emerald-400 rounded-full py-4 px-5 text-xl text-white outline-none">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
