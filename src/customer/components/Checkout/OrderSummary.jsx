import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";

const OrderSummary = () => {
  return (
    <>
      <div className="flex flex-col space-y-8">
        <div className="p-5 shadow-lg rounded-s-md border">
          <AddressCard />
        </div>
        <div className="lg:grid grid-cols-3 relative">
          <div className="col-span-2 space-y-5">
            {[1, 4, 5, 6, 7].map((item) => (
              <CartItem />
            ))}
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="">
              <p className="uppercase opacity-60 font-bold pb-4">
                Price Details
              </p>
              <hr />
              <div className="space-y-3 mb-10">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price (3 item)</span>
                  <span>₹2499</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>Disccount</span>
                  <span className="text-green-700">-₹629</span>
                </div>

                <div className="flex justify-between pt-3">
                  <span>Delivery Charge</span>
                  <span className="text-green-700">Free</span>
                </div>
                <div className="flex justify-between pt-3 font-bold">
                  <span>Total Amount</span>
                  <span className="text-green-700">₹629</span>
                </div>
              </div>
              <button className="bg-violet-500 text-white w-full p-2 rounded-md">
                CHECK OUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
