import React, { useEffect, useState } from "react";
import OrderCard from "./OrderCard";
import axios from "axios";
import { Link } from "react-router-dom";

const Order = () => {
  const [orderItem, setOrderItem] = useState();
  const orderStatus = [
    { lable: "On The Way", value: "on_the_way" },
    { lable: "Delivered", value: "delivered" },
    { lable: "Cancelled", value: "cancelled" },
    { lable: "Returned", value: "returned" },
  ];

  const token = localStorage.getItem("authToken");

  const handleOrder = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/order/getOrder`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setOrderItem(response.data.order);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    handleOrder();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 px-5 lg:px-10 lg:space-x-5 space-y-5 lg:space-y-0 my-10">
        <div className="h-72 lg:sticky lg:top-5 p-5 space-y-7 shadow-custom">
          <p className="text-lg font-bold">Filters</p>
          <div className="space-y-1">
            <h1 className="text-lg">ORDER STATUS</h1>
            {orderStatus.map((item) => (
              <div className="flex space-x-3">
                <input
                  type="checkbox"
                  defaultValue={item.value}
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor={item.value}
                  className="ml-3 text-sm text-gray-600"
                >
                  {item.lable}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 space-y-5">
          {orderItem?.map((item) =>
            item.buyProduct.map((el) => (
              <Link to={`/account/order/${item._id}/${el._id}`} key={el._id}>
                <OrderCard item={el} />
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Order;
