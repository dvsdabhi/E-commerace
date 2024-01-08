import axios from "axios";
import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const Payment = () => {

  // const [orderId, setOrderId] = useState('');

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
        `http://localhost:8080/api/create-order/`, {
          amount: dataReceived, // Your desired amount
          currency: 'INR', // Your desired currency
          // Add any additional data needed for the payment_success API
        });
        // console.log("response",response);

      const { order } = response.data;
      // setOrderId(order.id);
      const options = {
        key: 'rzp_test_FIAcb2qs5PCnqA',
        amount: order.amount,
        currency: order.currency,
        name: 'LadyLuxWear',
        description: 'Payment for Your Order',
        order_id: order.id,
        handler: function (response) {
          // Handle the success callback (e.g., update your database, show a success message)
          console.log(response);
        },
        prefill: {
          name: 'User Name',
          email: 'user@example.com',
        },
        notes: {
          address: 'Your Address',
        },
      };
      if (window.Razorpay) {
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      } else {
        console.error('Razorpay script not loaded');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // const initPay = (data) => {
  //   const options = {
  //     key : "rzp_test_FIAcb2qs5PCnqA",
  //     amount: 10,
  //     currency: "INR",
  //     name: "divyesh",
  //     description: "Test",
  //     image:"shoe.img",
  //     order_id: "data.id",
  //     handler: async (response) => {
  //       try {
  //         const verifyURL = "https://localhost:8080/api/payment/verify";
  //         const {data} = await axios.post(verifyURL,response);
  //       } catch(error) {
  //         console.log(error);
  //       }
  //     },
  //     theme: {
  //       color: "#3399cc",
  //     },
  //   };
  //   const rzp1 = new window.Razorpay(options);
  //   rzp1.open();
  // };
  
  // const handlePay = async () => {
  //   try {
  //     const orderURL = `https://localhost:8080/api/create-order/${orderId}`;
  //     const {data} = await axios.post(orderURL,{amount: 90});
  //     console.log(data);
  //     initPay(data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  
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
