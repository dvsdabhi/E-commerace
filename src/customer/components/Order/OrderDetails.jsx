import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";

const OrderDetails = () => {
  return (
    <>
      <div className="px-5 lg:px-20">
        <div className="shadow-custom p-5 space-y-5">
          <h1 className="font-bold text-xl">Delivery Address</h1>
          <AddressCard />
        </div>
        <div>
          <OrderTracker/>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
