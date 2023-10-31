import React, { useState } from "react";
import SignIn from "../SignIn/SignIn";
import { AiOutlineCloseSquare } from "react-icons/ai";

const Signup = ({ signup, setSignup, setSignin }) => {
  const handleSignin = () => {
    setSignin(true);
    setSignup(false);
  };
  return (
    <>
      {/* <div className="fixed inset-0 mt-60 flex justify-center items-center xsm:mt-28 sm:mt-40"> */}
      <div className="h-screen flex fixed z-50 top-0 left-0 items-center w-full justify-center bg-black bg-opacity-50">
        <div className="flex bg-white justify-center border rounded-lg shadow-2xl sm:p-5 xsm:p-5">
          <div className="flex flex-col items-center gap-3">
          <div className="flex w-full justify-end">
              <AiOutlineCloseSquare className="cursor-pointer text-2xl" onClick={()=>{setSignup(false)}}/>
            </div>
            <form action="" className="flex flex-col gap-5">
              <div className="flex gap-2 xsm:flex xsm:flex-col xsm:gap-5">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-3 border rounded-lg hover:border focus:border-violet-700 outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-3 border rounded-lg hover:border focus:border-violet-700 outline-none"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="p-3 border rounded-lg hover:border focus:border-violet-700 outline-none"
                required
              />
              <input
                type="password"
                name=""
                id=""
                placeholder="Password"
                className="p-3 border rounded-lg hover:border focus:border-violet-700 outline-none"
                required
              />
              <input
                type="password"
                name=""
                id=""
                placeholder="Confirm password"
                className="p-3 border rounded-lg hover:border focus:border-violet-700 outline-none"
                required
              />
              <button className="bg-violet-700 text-white p-3 rounded-lg">
                REGISTER
              </button>
            </form>
            <p className="my-3">
              if you have already account ?
              <span
                className="cursor-pointer text-violet-700 px-2"
                onClick={handleSignin}
              >
                LOGIN
              </span>
            </p>
          </div>
        </div>
        {/* {signInbox && <SignIn />} */}
      </div>
    </>
  );
};

export default Signup;
