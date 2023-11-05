import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";

const OrderDetails = () => {
  return (
    <>
      <div className="px-5 lg:px-20 space-y-5">
        <div className="shadow-custom p-5 space-y-5">
          <h1 className="font-bold text-xl">Delivery Address</h1>
          <AddressCard />
        </div>
        <div className="py-10 shadow-custom">
          <OrderTracker activeStep={3}/>
        </div>
        <div>
          <div className="grid grid-cols-2 shadow-custom rounded-md border p-5">
            <div className="flex space-x-5 items-center">
              <div>
              <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/g/6/k/m-sksh-dt1105-pcbl-fubar-original-imafux247zhqym2z-bb.jpeg?q=70" alt="" className="h-[5rem] w-[5rem] object-cover object-top" />
              </div>
              <div>
                <p>Men Printed Cotton Blend Straight Kurta</p>
                <p className="space-x-5"><span>Color : Blue</span> <span>Size : M</span></p>
                <p>Seller : Bharat</p>
                <p>₹1099</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="flex items-center">
                <span></span>
                <p>Rate & Review Product</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
