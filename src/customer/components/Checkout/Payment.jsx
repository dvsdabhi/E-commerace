import axios from "axios";
import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Payment = () => {
  const params = useParams();
  const location = useLocation();
  const dataReceived = location.state?.data || "DefaultData";
  console.log("dataReceived", dataReceived);

  console.log("params==-=-=-=--=-=", params);

  const { orderId } = params;
  console.log(orderId);

  const handlePayment = async () => {
    try {
      const response = await axios.post(
        `${process.env.LOCALHOST_URL}api/checkout/${orderId}`
      );
      console.log("response------>>>>>>>><<<<<<<---------", response);
      if (response.data.resData.paymentLinkUrl) {
        window.location.href = response.data.resData.paymentLinkUrl;
      }
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div>
        <h1>{dataReceived}</h1>
        <button onClick={handlePayment}>Payment</button>
      </div>
    </>
  );
};

export default Payment;
