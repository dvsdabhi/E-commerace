import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import OrderStatusModal from "./OrderStatusModal";
import { toast } from "react-toastify";
import { RingLoader } from "react-spinners";

const Order = () => {
  const [order, setOrder] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalId, setModalId] = useState("");
  const [orderLoading, setOrderLoading] = useState("");


  const viewOrders = async () => {
    try {
      setOrderLoading(true);
      const response = await axios.get(
        "http://localhost:8080/api/admin/orders"
      );
      // console.log(response.data.orders);
      setOrder(response.data.orders);
      setOrderLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    viewOrders();
  }, []);

  const handleDeleteOrder = async (orderId) => {
    console.log("orderId----", orderId);
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/admin/order/${orderId}`
      );
      console.log(response.data.message);
      viewOrders();
      toast.success("order deleted successfully");
    } catch (error) {
      console.log(error.message);
    }
  };

  const openModal = (id) => {
    setModalId(id);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="w-full pb-5">
        <div className="flex flex-col p-3 space-y-5">
          <div className="text-3xl">All Orders</div>
          <div className="overflow-x-auto">
            {orderLoading ? (
              <div className="py-36 flex justify-center items-center w-full">
                <RingLoader />
              </div>
            ) : (
              <table className="w-full bg-white border border-gray-200">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 px-2 text-start">OrderId</th>
                    <th className="py-3 text-start">Item</th>
                    <th className="py-3 text-start">Price</th>
                    <th className="py-3 text-start">Status</th>
                    <th className="py-3 text-start">Update</th>
                    <th className="py-3 text-start">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {order?.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2 px-2 text-start">{item._id}</td>

                      <td className="py-2 text-start">{item.totalItem}</td>
                      <td className="py-2 text-start">
                        {item.totalDiscountedPrice}
                      </td>
                      <td className="py-2 text-start">
                        <span
                          className={`rounded-xl ${item.orderStatus === "Pending"
                            ? "bg-yellow-500"
                            : item.orderStatus === "DELIVERED"
                              ? "bg-green-800"
                              : item.orderStatus === "SHIPPED"
                                ? "bg-blue-700"
                                : item.orderStatus === "CONFIRMED"
                                  ? "bg-green-600"
                                  : "bg-green-700"
                            } p-2 text-white`}
                        >
                          {item.orderStatus}
                        </span>
                      </td>
                      <td className="py-2 text-start">
                        <button onClick={() => openModal(item._id)}>STATUS</button>
                        {modalId === item._id && isModalOpen && (
                          <OrderStatusModal
                            order_id={modalId}
                            setIsModalOpen={setIsModalOpen}
                            isModalOpen={isModalOpen}
                            viewOrders={viewOrders}
                          />
                        )}
                      </td>
                      <td className="py-2 text-start">
                        <button
                          className="bg-red-500 text-white px-2 py-1 rounded"
                          onClick={() => handleDeleteOrder(item._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
