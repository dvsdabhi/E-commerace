import React from "react";
import { MdOutlineAdjust } from "react-icons/md";

const OrderCard = ({ item }) => {
  return (
    <>
      <div className="grid grid-cols-3 shadow-custom hover:shadow-xl p-3">
        <div className="flex space-x-4 cursor-pointer">
          <img
            src={item.product.imageUrl}
            alt=""
            className="h-[5rem] w-[5rem] object-cover object-top"
          />
          <div className="">
            <p>{item.product.title}</p>
            <p className="opacity-50 text-xs font-semibold">Size : M</p>
            <p className="opacity-50 text-xs font-semibold">Color : Black</p>
          </div>
        </div>
        <div className="flex justify-center">
          <p>₹{item.product.discountedPrice.toFixed(0)}</p>
        </div>
        <div>
          {true && (
            <div>
              <p className="flex space-x-1 items-center">
                <MdOutlineAdjust className="text-green-600 text-xl" />
                <span>Delivered On March 3</span>
              </p>
              <p className="text-xs">
                <span>Your Item Has Been Delivered</span>
              </p>
            </div>
          )}
          {false && (
            <p>
              <MdOutlineAdjust />
              <span>Delivered on march 3</span>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default OrderCard;
