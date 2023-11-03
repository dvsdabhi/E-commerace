import React from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const CartItem = () => {
  return (
    <>
      <div className="shadow-custom p-5 border rounded-md">
        <div className="flex items-center">
          <div className="h-[5rem] w-[5rem] lg:h-[9rem] lg:w-[9rem]">
            <img
              className="object-cover object-top w-full h-full"
              src="https://rukminim1.flixcart.com/image/612/612/kxkqavk0/kurta/l/w/t/xxl-vlsd-a0lt-vida-loca-original-imagay8hcrqax2uv.jpeg?q=70"
              alt=""
            />
          </div>

          <div className="ml-5 space-y-1">
            <p className="font-semibold">
              Men Self Design Pure Cotton Straight Kurta
            </p>
            <p className="opacity-70">Size : L,White</p>
            <p className="opacity-70 mt-2">Seller : Mansi Fashion</p>

            <div className="flex space-x-5 items-center text-gray-900 pt-6">
              <p className="line-through opacity-50">₹2499</p>
              <p className="font-semibold">₹629</p>
              <p className="text-green-700 font-semibold">74 % off</p>
            </div>
          </div>
        </div>

        <div className="lg:flex items-center lg:space-x-10 pt-4">
          <div className="flex items-center space-x-2">
            <button>
              <AiOutlineMinusCircle className="text-violet-800 text-xl"/>
            </button>
            <span className="py-1 px-7 border rounded-sm">3</span>
            <button>
              <AiOutlinePlusCircle className="text-violet-800 text-xl"/>
            </button>
          </div>
          <div className="pl-10">
            <button className="text-violet-600">REMOVE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
