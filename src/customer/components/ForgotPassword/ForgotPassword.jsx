import axios from "axios";
import React, { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ForgotPassword = ({setForgotpwd, forgotpwd}) => {
    
    const [email,setEmail] = useState("");

    const navigate = useNavigate();

    const handleForgotPwd = () => {
        setForgotpwd(!forgotpwd);
    }

    const send_email = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post(`http://localhost:8080/api/send-otp-email`,{email});
            console.log(res);
            if(res.data.status === 200 ){
                setForgotpwd(!forgotpwd);
                navigate('/user/verify-otp')
            }
        }catch(error){
            console.log(error.message);
        }
    }
    return (
        <>
            <div className="h-screen flex fixed z-50 top-0 left-0 items-center w-full justify-center bg-black bg-opacity-50">
                <div className="flex justify-center border rounded-lg shadow-2xl xsm:p-5 bg-white">
                    <div className="flex flex-col items-center gap-3 p-5">
                        <div className="flex w-full justify-end">
                            <AiOutlineCloseSquare onClick={handleForgotPwd} className="cursor-pointer text-xl" />
                        </div>
                        <div className="flex flex-col items-center px-5 gap-5">
                            <div>
                                <h1 className="text-blue-700 font-bold">LadyLuxWear</h1>
                            </div>
                            <div className="flex flex-col items-center">
                                <h1 className="font-bold">Forgot Password</h1>
                                <p className="text-wrap">Don't worry!Reset your password is easy.Just type in the email you register to LadyLuxWear.</p>
                            </div>
                            <form onSubmit={send_email} className="flex flex-col gap-4">
                                <div className="flex flex-col">
                                    <label htmlFor="">Email</label>
                                    <input type="email" onChange={(e)=>setEmail(e.target.value)} className="p-2 border-2 rounded-sm" placeholder="Enter your email address" />
                                </div>
                                <button className="rounded-sm bg-blue-600 p-2">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;