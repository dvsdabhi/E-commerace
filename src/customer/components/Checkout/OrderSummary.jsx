import React, { useEffect, useState } from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const [address, setAddress] = useState({});
  const [buyProduct, setBuyProduct] = useState();
  const [totalItem, setTotalItem] = useState();
  const [subTotalPrice, setSubTotalPrice] = useState();
  const [totalPrice, setTotalPrice] = useState();

  const token = localStorage.getItem("authToken");
  const navigate = useNavigate();

  // const handleDelivery = async () => {
  //   navigate("/checkout?step=4", { state: { data: totalPrice.toFixed(0) } });
  // };

  const handleAddress = async () => {
    const response = await axios.get(
      `${process.env.LOCALHOST_URL}api/orderSummaryAdd`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data.address);
    setAddress(response.data.address[0]);
  };

  const showBuyProduct = async () => {
    const response = await axios.get(`${process.env.LOCALHOST_URL}api/cartitem`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setBuyProduct(response.data.cartProduct);
    let totalItem = response.data.cartProduct.reduce((acc, tot) => {
      return acc + tot.quantity;
    }, 0);

    let price = response.data.cartProduct.reduce((acc, tot) => {
      return acc + tot.price * tot.quantity;
    }, 0);

    let totalPrice = response.data.cartProduct.reduce((acc, tot) => {
      return acc + tot.product.discountedPrice * tot.quantity;
    }, 0);

    setTotalItem(totalItem);
    setSubTotalPrice(price);
    setTotalPrice(totalPrice);
  };

  useEffect(() => {
    handleAddress();
    showBuyProduct();
  }, []);

  const handleOrder = async () => {
    const data = {
      totalPrice: subTotalPrice.toFixed(0),
      totalDiscountedPrice: totalPrice.toFixed(0),
      discount: (subTotalPrice - totalPrice).toFixed(0),
      totalItem: totalItem,
      buyProduct: buyProduct
    };
    try {
      const response = await axios.post(
        `http://localhost:8080/order/createOrder`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("response----------", response);
      navigate(`/checkout/${response.data.order._id}`, { state: { data: totalPrice.toFixed(0) } });
      // navigate("/checkout?step=4", { state: { data: totalPrice.toFixed(0) } });
    } catch (error) {
      console.log(error);
    }
  };

  // console.log("address", buyProduct);
  return (
    <>
      <div className="flex flex-col space-y-8 my-5">
        <div className="p-5 shadow-lg rounded-s-md border">
          {/* <AddressCard address={address}/> */}
          <p className="font-semibold">
            {address.firstName} {address.lastName}
          </p>
          <p>
            {address.streetAddress} ,{address.zipCode}
          </p>
          <div className="space-y-1">
            <p className="font-semibold">Phone Number</p>
            <p>{address.mobile}</p>
          </div>
        </div>
        <div className="lg:grid grid-cols-3 relative lg:space-x-5">
          <div className="col-span-2 space-y-5">
            {buyProduct?.map((item) => (
              <div className="shadow-custom p-5 border rounded-md">
                <div className="flex items-center">
                  <div className="h-[5rem] w-[5rem] lg:h-[9rem] lg:w-[9rem]">
                    <img
                      className="object-cover object-top w-full h-full"
                      src={item.product?.imageUrl[0]}
                      alt=""
                    />
                  </div>
                  <div className="ml-5 space-y-1">
                    <p className="font-semibold">{item.product?.title}</p>
                    <p className="opacity-70">Size : {item.size},White</p>
                    <p className="">Price : {item.product?.discountedPrice}</p>
                    <p>Quantity : {item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="h-fit py-3 px-5 sticky top-0 mt-5 lg:mt-0 shadow-custom">
            <div className="">
              <p className="uppercase opacity-60 font-bold pb-4">
                Price Details
              </p>
              <hr />
              <div className="space-y-3 mb-10">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price ({totalItem} item)</span>
                  <span>₹{subTotalPrice}</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>Disccount</span>
                  <span className="text-green-700">
                    -₹{subTotalPrice - totalPrice?.toFixed(0)}
                  </span>
                </div>

                <div className="flex justify-between pt-3">
                  <span>Delivery Charge</span>
                  <span className="text-green-700">Free</span>
                </div>
                <div className="flex justify-between pt-3 font-bold">
                  <span>Total Amount</span>
                  <span className="text-green-700">
                    ₹{totalPrice?.toFixed(0)}
                  </span>
                </div>
              </div>
              <button
                className="bg-violet-500 text-white w-full p-2 rounded-md"
                onClick={handleOrder}
              >
                Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
