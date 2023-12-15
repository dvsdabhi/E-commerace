import React, { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { checkAuth } from "../../../redux/features/Auth";
import { toast } from "react-toastify";
import { signIn } from "../../utils/queries";
import { useNavigate } from "react-router-dom";

const SignIn = ({ setSignup, setSignin }) => {
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  };

  const onSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn(signInData);
      console.log(res);
      if (res.data.status === 200) {
        if (res.data.role === "admin") {
          localStorage.setItem("authToken", res.data.token);
          // dispatch(checkAuth());
          toast.success("login success");
          setTimeout(() => {
            setSignin(false);
          }, 1000);
          navigate("/admin");
        } else {
          localStorage.setItem("authToken", res.data.token);
          dispatch(checkAuth());
          toast.success("login success");
          setTimeout(() => {
            setSignin(false);
          }, 1000);
          console.log(res.data);
        }
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

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
              <AiOutlineCloseSquare
                className="cursor-pointer text-2xl"
                onClick={() => {
                  setSignin(false);
                }}
              />
            </div>
            <form onSubmit={onSignIn} className="flex flex-col gap-5">
              <input
                onChange={handleChange}
                name="email"
                value={signInData.value}
                type="email"
                placeholder="Email"
                className="p-3 border rounded-lg hover:border focus:border-violet-700 outline-none"
                required
              />
              <input
                onChange={handleChange}
                name="password"
                value={signInData.password}
                type="password"
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
