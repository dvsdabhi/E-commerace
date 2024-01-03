import React, { useEffect, useState } from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import axios from "axios";

const OrderDetails = () => {
  const [address, setAddress] = useState();
  const [product, setProduct] = useState();
  const params = useParams();
  const { orderId1, orderId2 } = params;
  console.log(orderId1, orderId2);
  const handleOrderDetails = async () => {
    try {
      const response = await axios.get(
        `https://node-mongodb-api-4zq2.onrender.com/api/order/${orderId1}/${orderId2}`
      );
      setAddress(response.data.order.shippingAddress);
      setProduct(response.data.order.buyProduct);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleOrderDetails();
  }, []);
  return (
    <>
      <div className="px-5 lg:px-20 space-y-5">
        <div className="shadow-custom p-5 space-y-5">
          <h1 className="font-bold text-xl">Delivery Address</h1>
          {/* <AddressCard /> */}
          {/* <AddressCard address={address}/> */}
          <p className="font-semibold">
            {address?.firstName} {address?.lastName}
          </p>
          <p>
            {address?.streetAddress} ,{address?.zipCode}
          </p>
          <div className="space-y-1">
            <p className="font-semibold">Phone Number</p>
            <p>{address?.mobile}</p>
          </div>
        </div>
        <div className="py-10 shadow-custom">
          <OrderTracker activeStep={3} />
        </div>
        <div className="space-y-5">
          {product
            ?.filter((item) => item._id === orderId2)
            .map((item) => (
              <div
                key={item._id}
                className="grid grid-cols-2 lg:grid-cols-2 shadow-custom rounded-md border p-5 lg:gap-0 gap-4"
              >
                <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 space-x-5 items-center">
                  <div>
                    <img
                      src={item.product.imageUrl}
                      alt=""
                      className="h-[5rem] w-[5rem] object-cover object-top"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold">{item.product.title}</p>
                    <p className="space-x-5 opacity-50 text-xs font-semibold">
                      <span>Color : Blue</span> <span>Size : M</span>
                    </p>
                    <p>Seller : Bharat</p>
                    <p>₹{item.product.discountedPrice.toFixed(0)}</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="flex items-center space-x-1">
                    <span>
                      <AiFillStar className="text-lg" />
                    </span>
                    <p>Rate & Review Product</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
