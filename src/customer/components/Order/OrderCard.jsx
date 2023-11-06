import React from "react";
import { MdOutlineAdjust } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {

  const navigate = useNavigate();

  return (
    <>
      <div onClick={()=>navigate(`/account/order/${5}`)} className="grid grid-cols-3 shadow-custom hover:shadow-xl p-3">
        <div className="flex space-x-4 cursor-pointer">
          <img
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/z/l/b/xl-grey-sws2902-allan-peter-original-imag3y6tzaaxwkhy-bb.jpeg?q=70"
            alt=""
            className="h-[5rem] w-[5rem] object-cover object-top"
          />
          <div className="">
            <p>Men Printed Pure Cotton Straight Kurta</p>
            <p className="opacity-50 text-xs font-semibold">Size : M</p>
            <p className="opacity-50 text-xs font-semibold">Size : Black</p>
          </div>
        </div>
        <div className="flex justify-center">
          <p>₹1099</p>
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
