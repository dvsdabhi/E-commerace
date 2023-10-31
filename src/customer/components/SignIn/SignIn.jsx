import React from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";

const SignIn = ({ setSignup, setSignin }) => {
  const handleSignup = () => {
    setSignup(true);
    setSignin(false);
  };

  return (
    <>
      <div className="h-screen flex fixed z-50 top-0 left-0 items-center w-full justify-center bg-black bg-opacity-50">
        <div className="flex justify-center border p-10 rounded-lg shadow-2xl xsm:p-5 bg-white">
          <div className="flex flex-col items-center gap-3">
            <div className="flex w-full justify-end">
              <AiOutlineCloseSquare className="cursor-pointer text-2xl" onClick={()=>{setSignin(false)}}/>
            </div>
            <form action="" className="flex flex-col gap-5">
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
              <button className="bg-violet-700 text-white p-3 rounded-lg">
                LOGIN
              </button>
            </form>
            <p className="my-3">
              don't have account ?
              <span
                className="cursor-pointer text-violet-700 px-2"
                onClick={handleSignup}
              >
                REGISTER
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
