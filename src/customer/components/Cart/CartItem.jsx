import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import _debounce from "lodash/debounce";
const CartItem = ({
  cartProduct,
  subTotalPrice,
  setSubTotalPrice,
  handleDelete,
  setQuantity,
  quantity,
  handleQty,
}) => {
  const handleDebouncing = _debounce(handleQty, 10);
  useEffect(() => {
    return () => {
      // Cleanup the debounced function when the component unmounts
      handleDebouncing.cancel();
    };
  }, [handleDebouncing]);

  return (
    <>
      <div className="shadow-custom p-5 border rounded-md">
        <div className="flex items-center">
          <div className="h-[5rem] w-[5rem] lg:h-[9rem] lg:w-[9rem]">
            <img
              className="object-cover object-top w-full h-full"
              src={cartProduct.product.imageUrl[0]}
              alt=""
            />
          </div>

          <div className="ml-5 space-y-1">
            <p className="font-semibold">{cartProduct.product.title}</p>
            <p className="opacity-70">Size : {cartProduct.size}, {cartProduct.product.color}</p>
            <p className="opacity-70 mt-2">Seller : Mansi Fashion</p>

            <div className="flex space-x-5 items-center text-gray-900 pt-6">
              <p className="line-through opacity-50">
                ₹{cartProduct.product?.price}
              </p>
              <p className="font-semibold">
                ₹{cartProduct.product?.discountedPrice.toFixed(0)}
              </p>
              <p className="text-green-700 font-semibold">
                {cartProduct.product?.discountPersent} % off
              </p>
            </div>
          </div>
        </div>

        <div className="lg:flex items-center lg:space-x-10 pt-4">
          <div className="flex items-center space-x-2">
            <button
              disabled={cartProduct.quantity === 1}
              onClick={() => handleDebouncing(cartProduct._id, "decrement")}
            >
              <AiOutlineMinusCircle className="text-violet-800 text-xl" />
            </button>
            <span className="py-1 px-7 border rounded-sm">
              {cartProduct.quantity}
            </span>
            <button
              onClick={() => handleDebouncing(cartProduct._id, "increment")}
            >
              <AiOutlinePlusCircle className="text-violet-800 text-xl" />
            </button>
          </div>
          <div className="pl-10">
            <button
              className="text-violet-600"
              onClick={() => handleDelete(cartProduct._id)}
            >
              REMOVE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
