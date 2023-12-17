import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import OrderStatusModal from './OrderStatusModal';
import { toast } from "react-toastify";


const Order = () => {
  const [order,setOrder] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);


  const viewOrders = async() => {
    try {
      const response = await axios.get("http://localhost:8080/api/admin/orders");
      // console.log(response.data.orders);
      setOrder(response.data.orders);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(()=>{
    viewOrders();
  },[order]);

  const handleDeleteOrder = async(orderId) => {
    console.log("orderId----",orderId);
    try {
      const response = await axios.delete(`http://localhost:8080/api/admin/order/${orderId}`);
      console.log(response.data.message);
      toast.success("order deleted successfully");
    } catch (error) {
      console.log(error.message);
    }
  }

  const openModal = (id) => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
    <div className='flex flex-col p-3 shadow-2xl space-y-5'>
        <div className='text-3xl'>All Orders</div>
        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-200">
            <thead>
              <tr className="border-b">
                <th className='py-3'>OrderId</th>
                <th className='py-3'>Item</th>
                <th className='py-3'>Price</th>
                <th className='py-3'>Status</th>
                <th className='py-3'>Update</th>
                <th className='py-3'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {order?.map((item, index) => (
                <tr key={index} className='border-b'>
                  <td className="py-2 px-4 text-center">{item._id}</td>

                  <td className="py-2 px-4 text-center">{item.totalItem}</td>
                  <td className="py-2 px-4 text-center">{item.totalDiscountedPrice}</td>
                  <td className="py-2 px-4 text-center">{item.orderStatus}</td>
                  <td className="py-2 px-4 text-center">
                    <button onClick={(e)=>openModal(e._id)}>STATUS</button></td>
                  <td className="py-2 px-4 text-center">
                    <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={()=>handleDeleteOrder(item._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isModalOpen && (
        <OrderStatusModal/>
      )}
     
    </>
  )
}

export default Order;