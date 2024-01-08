import React, { useEffect, useState } from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  // const [orderId, setOrderId] = useState('');
  // const [paymentDetails, setPaymentDetails] = useState();

  const [address, setAddress] = useState({});
  const [buyProduct, setBuyProduct] = useState();
  const [totalItem, setTotalItem] = useState();
  const [subTotalPrice, setSubTotalPrice] = useState();
  const [totalPrice, setTotalPrice] = useState();

  const token = localStorage.getItem("authToken");
  const navigate = useNavigate();

  // const handleDelivery = async () => {
  //   navigate("/checkout?step=4", { state: { data: totalPrice.toFixed(0) } });
  // };

  const handleAddress = async () => {
    const response = await axios.get(
      `https://node-mongodb-api-4zq2.onrender.com/api/orderSummaryAdd`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data.address);
    setAddress(response.data.address[0]);
  };

  const showBuyProduct = async () => {
    const response = await axios.get(`https://node-mongodb-api-4zq2.onrender.com/api/cartitem`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setBuyProduct(response.data.cartProduct);
    let totalItem = response.data.cartProduct.reduce((acc, tot) => {
      return acc + tot.quantity;
    }, 0);

    let price = response.data.cartProduct.reduce((acc, tot) => {
      return acc + tot.price * tot.quantity;
    }, 0);

    let totalPrice = response.data.cartProduct.reduce((acc, tot) => {
      return acc + tot.product.discountedPrice * tot.quantity;
    }, 0);

    setTotalItem(totalItem);
    setSubTotalPrice(price);
    setTotalPrice(totalPrice);
  };

  useEffect(() => {
    handleAddress();
    showBuyProduct();
  }, []);

  const handleOrder = async (paymentDetails) => {
    const data = {
      totalPrice: subTotalPrice.toFixed(0),
      totalDiscountedPrice: totalPrice.toFixed(0),
      discount: (subTotalPrice - totalPrice).toFixed(0),
      totalItem: totalItem,
      buyProduct: buyProduct,
      // paymentResponse: paymentDetails, // Add payment response to order data
    };
    try {
      const response = await axios.post(
        `https://node-mongodb-api-4zq2.onrender.com/api/order/createOrder`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("response----------", response);
      if (response.data.status === 200) {
        // setOrderId(response.data.order._id);
        const orderId = response.data.order._id;
        try {
          const res = await axios.post(`http://localhost:8080/api/addPaymentDetails`,
            {
              orderId,
              paymentDetails
            });
          console.log("res------------", res);
        } catch (error) {
          console.log(error.message);
        }
      }
      // navigate(`/checkout/${response.data.order._id}`, { state: { data: totalPrice.toFixed(0) } });
      // navigate("/checkout?step=4", { state: { data: totalPrice.toFixed(0) } });
    } catch (error) {
      console.log(error);
    }
  };

  const handlePayment = async () => {
    try {
      const res = await axios.post(`http://localhost:8080/api/createorder`, {
        amount: totalPrice.toFixed(0),
        currency: "INR"
      });
      console.log("res", res);
      const { order } = res.data;
      // setOrderId(order.id);

      const options = {
        key: 'rzp_test_FIAcb2qs5PCnqA',
        amount: order.amount,
        currency: order.currency,
        name: 'Your Store',
        description: 'Payment for Your Order',
        order_id: order.id,
        handler: function (response) {
          // Handle the success callback
          console.log('Payment success:', response);
          // setPaymentDetails(response);
          handleOrder(response);
          // const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = res;
          // Use razorpay_order_id, razorpay_payment_id, and razorpay_signature as needed
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
  }



  // console.log("address", paymentDetails);
  return (
    <>
      <div className="flex flex-col space-y-8 my-5">
        <div className="p-5 shadow-lg rounded-s-md border">
          {/* <AddressCard address={address}/> */}
          <p className="font-semibold">
            {address.firstName} {address.lastName}
          </p>
          <p>
            {address.streetAddress} ,{address.zipCode}
          </p>
          <div className="space-y-1">
            <p className="font-semibold">Phone Number</p>
            <p>{address.mobile}</p>
          </div>
        </div>
        <div className="lg:grid grid-cols-3 relative lg:space-x-5">
          <div className="col-span-2 space-y-5">
            {buyProduct?.map((item) => (
              <div className="shadow-custom p-5 border rounded-md">
                <div className="flex items-center">
                  <div className="h-[5rem] w-[5rem] lg:h-[9rem] lg:w-[9rem]">
                    <img
                      className="object-cover object-top w-full h-full"
                      src={item.product?.imageUrl[0]}
                      alt=""
                    />
                  </div>
                  <div className="ml-5 space-y-1">
                    <p className="font-semibold">{item.product?.title}</p>
                    <p className="opacity-70">Size : {item.size},White</p>
                    <p className="">Price : {item.product?.discountedPrice}</p>
                    <p>Quantity : {item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="h-fit py-3 px-5 sticky top-0 mt-5 lg:mt-0 shadow-custom">
            <div className="">
              <p className="uppercase opacity-60 font-bold pb-4">
                Price Details
              </p>
              <hr />
              <div className="space-y-3 mb-10">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price ({totalItem} item)</span>
                  <span>₹{subTotalPrice}</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>Disccount</span>
                  <span className="text-green-700">
                    -₹{subTotalPrice - totalPrice?.toFixed(0)}
                  </span>
                </div>

                <div className="flex justify-between pt-3">
                  <span>Delivery Charge</span>
                  <span className="text-green-700">Free</span>
                </div>
                <div className="flex justify-between pt-3 font-bold">
                  <span>Total Amount</span>
                  <span className="text-green-700">
                    ₹{totalPrice?.toFixed(0)}
                  </span>
                </div>
              </div>
              <button
                className="bg-violet-500 text-white w-full p-2 rounded-md"
                onClick={handlePayment}
              >
                Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
