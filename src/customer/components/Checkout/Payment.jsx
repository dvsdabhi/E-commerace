import React from 'react'
import { useLocation } from 'react-router-dom';

const Payment = () => {
    const location = useLocation();
    const dataReceived = location.state?.data || "DefaultData";
    console.log("dataReceived",dataReceived);
  return (
    <>
    <div>
        <h1>{dataReceived}</h1>
        <button>Payment</button>
    </div>
    </>
  )
}

export default Payment