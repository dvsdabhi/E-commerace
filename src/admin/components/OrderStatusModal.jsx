import axios from "axios";
import React from "react";

const OrderStatusModal = ({ order_id, isModalOpen, setIsModalOpen, viewOrders }) => {
  // const [status, setStatus] = useState("");
  const changeStatus = async (e) => {
    const buttonText = e.target.textContent;
    const extractedText = buttonText.split(" ")[0]; // Extract the first word
    const orderStatus = extractedText.toUpperCase();
    console.log("buttonText====", orderStatus);
    try {
      const response = await axios.put(
        `https://node-mongodb-api-4zq2.onrender.com/api/admin/orders/status/${order_id}`,
        { orderStatus }
      );
      console.log(response);
      setIsModalOpen(!isModalOpen);
      viewOrders();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="absolute flex flex-col bg-white p-2 shadow-2xl">
        <button className="text-left" onClick={changeStatus}>
          Confirmed Order
        </button>
        <button className="text-left" onClick={changeStatus}>
          Shipped Order
        </button>
        <button className="text-left" onClick={changeStatus}>
          Delivered Order
        </button>
      </div>
    </>
  );
};

export default OrderStatusModal;
