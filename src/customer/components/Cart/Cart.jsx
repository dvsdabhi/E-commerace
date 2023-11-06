import React from "react";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const navigate = useNavigate();

  const handleCheckOut = () => {
    navigate("/checkout?step=2")
  }

  return (
    <>
      <div className="lg:grid grid-cols-3 px-5 lg:px-16 relative mt-3 lg:space-x-5">
        <div className="col-span-2 space-y-2">
          {[1, 4, 5, 6, 7].map((item) => (
            <CartItem />
          ))}
        </div>
        <div className="p-5 sticky top-0 h-fit mt-5 lg:mt-0 shadow-custom">
          <div className="">
            <p className="uppercase opacity-60 font-bold pb-4">Price Details</p>
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
            <button onClick={handleCheckOut} className="bg-violet-500 text-white w-full p-2 rounded-md">
              CHECK OUT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
