import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const OrderDetails = () => {
  return (
    <>
      <div className="px-5 lg:px-20 space-y-5">
        <div className="shadow-custom p-5 space-y-5">
          <h1 className="font-bold text-xl">Delivery Address</h1>
          <AddressCard />
        </div>
        <div className="py-10 shadow-custom">
          <OrderTracker activeStep={3} />
        </div>
        <div className="space-y-5">
          {[1, 1, 1, 1].map((item) => (
            <div className="grid grid-cols-2 lg:grid-cols-2 shadow-custom rounded-md border p-5 lg:gap-0 gap-4">
              <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 space-x-5 items-center">
                <div>
                  <img
                    src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/g/6/k/m-sksh-dt1105-pcbl-fubar-original-imafux247zhqym2z-bb.jpeg?q=70"
                    alt=""
                    className="h-[5rem] w-[5rem] object-cover object-top"
                  />
                </div>
                <div className="space-y-2">
                  <p className="font-semibold">
                    Men Printed Cotton Blend Straight Kurta
                  </p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    <span>Color : Blue</span> <span>Size : M</span>
                  </p>
                  <p>Seller : Bharat</p>
                  <p>₹1099</p>
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
