import React, { useState } from "react";
import SignIn from "../SignIn/SignIn";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { checkAuth } from "../../../redux/features/Auth.js";
import { signUp } from "../../utils/queries";

const Signup = ({ signup, setSignup, setSignin }) => {
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const onSignUp = async (e) => {
    e.preventDefault();
    if (signUpData.password === signUpData.confirmPassword) {
      try {
        const res = await signUp(signUpData);
        console.log(res.data);
        if (res.data.status === 200) {
          localStorage.setItem("authToken", res.data.token);
          const token = localStorage.getItem("authToken");
          if (token != null) {
            dispatch(checkAuth(true));
            toast.success("register success");
            setTimeout(() => {
              setSignup(false);
            }, 1000);
          }
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      toast.error("password and confirm-password does not match");
    }
  };

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
              <AiOutlineCloseSquare
                className="cursor-pointer text-2xl"
                onClick={() => {
                  setSignup(false);
                }}
              />
            </div>
            <form onSubmit={onSignUp} action="" className="flex flex-col gap-5">
              <div className="flex gap-2 xsm:flex xsm:flex-col xsm:gap-5">
                <input
                  onChange={handleChange}
                  name="firstName"
                  value={signUpData.firstName}
                  type="text"
                  placeholder="First Name"
                  className="p-3 border rounded-lg hover:border focus:border-violet-700 outline-none"
                  required
                />
                <input
                  onChange={handleChange}
                  name="lastName"
                  value={signUpData.lastName}
                  type="text"
                  placeholder="Last Name"
                  className="p-3 border rounded-lg hover:border focus:border-violet-700 outline-none"
                  required
                />
              </div>
              <input
                onChange={handleChange}
                name="email"
                value={signUpData.email}
                type="email"
                placeholder="Email"
                className="p-3 border rounded-lg hover:border focus:border-violet-700 outline-none"
                required
              />
              <input
                onChange={handleChange}
                type="password"
                name="password"
                value={signUpData.password}
                placeholder="Password"
                className="p-3 border rounded-lg hover:border focus:border-violet-700 outline-none"
                required
              />
              <input
                onChange={handleChange}
                type="password"
                name="confirmPassword"
                value={signUpData.confirmPassword}
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
