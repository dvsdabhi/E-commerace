import axios from "axios";
import React, { useState } from "react";
import { FcPrivacy } from "react-icons/fc";

const VerifyOtp = () => {
    const [otp, setOtp] = useState(0);
    const [email, setEmail] = useState("0");
    const [newPassword, setNewPassword] = useState("");


    const otp_verify = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:8080/api/verify-otp`,{otp,email,newPassword});
            console.log("res==-=-=-=-=-",res);
        } catch (error) {
            console.log(error.message);
        }

    }
    return (
        <>
            <div className="flex justify-center">
                <div className="flex flex-col p-5 gap-5">
                    <div className="flex flex-col space-y-3">
                        <h1 className="font-bold text-xl">Otp verification</h1>
                        <p className="text-wrap">OTP has been sent to your e-mail address,Otp valid for 5 minutes</p>
                    </div>
                    <div className="flex justify-center">
                        <FcPrivacy className="text-5xl" />
                    </div>
                    <div>
                        <form onSubmit={otp_verify} className="flex flex-col gap-10">
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col">
                                    <label htmlFor="">Enter OTP here</label>
                                    <input type="text" onChange={(e) => setOtp(e.target.value)} className="border-2 border-gray-500 p-2 rounded-md" placeholder="6 digit OTP code" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="">Enter register e-mail</label>
                                    <input type="email" onChange={(e) => setEmail(e.target.value)} className="border-2 border-gray-500 p-2 rounded-md" placeholder="Enter register e-mail" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="">Enter new password</label>
                                    <input type="password" onChange={(e) => setNewPassword(e.target.value)} className="border-2 border-gray-500 p-2 rounded-md" placeholder="Enter new password" />
                                </div>
                            </div>
                            <button className="bg-blue-600 rounded-md p-2">Verify</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VerifyOtp;