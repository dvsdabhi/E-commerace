import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RingLoader } from "react-spinners";

const Product = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState();
  const [ProductLoading, setProductLoading] = useState("");


  const handleViewProduct = async () => {
    try {
      setProductLoading(true);
      const res = await axios.get(`http://localhost:8080/api/admin/product`);
      setProductLoading(false);
      setProduct(res.data.product);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleViewProduct();
  }, []);

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/admin/product/${productId}`
      );
      console.log(response.data.message);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUpdate = async (id) => {
    navigate(`/admin/product/update/${id}`);
  };
  return (
    <>
      <div className="w-full pb-5">
        <div className="flex flex-col p-3 space-y-5 h-full">
          <div className="text-3xl">All Products</div>
          <div className="">
            {ProductLoading ? (
              <div className="py-36 flex justify-center items-center w-full">
                <RingLoader />
              </div>
            ) : (
              <table className="w-full bg-white border border-gray-200">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 px-2 text-start">Image</th>
                    <th className="py-3 text-start">Title</th>
                    <th className="py-3 text-start">Category</th>
                    <th className="py-3 text-start">Price</th>
                    <th className="py-3 text-start">Quantity</th>
                    <th className="py-3 text-center" colSpan="2">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product?.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2 px-4">
                        <div className="w-16 h-16 overflow-hidden rounded-full">
                          <img
                            src={item.imageUrl[0]}
                            alt={item.title}
                            className="w-full h-full object-cover object-top rounded-full"
                          />
                        </div>
                      </td>
                      <td className="py-2 text-start">{item.title}</td>
                      <td className="py-2 text-start">{item.category}</td>
                      <td className="py-2 text-start">{item.discountedPrice}</td>
                      <td className="py-2 text-start">{item.quantity}</td>
                      <td className="">
                        <button
                          className="bg-blue-500 text-white px-2 py-1 rounded"
                          onClick={() => handleUpdate(item._id)}
                        >
                          Update
                        </button>
                      </td>
                      <td className="">
                        <button
                          className="bg-red-500 text-white px-2 py-1 rounded"
                          onClick={() => handleDeleteProduct(item._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
