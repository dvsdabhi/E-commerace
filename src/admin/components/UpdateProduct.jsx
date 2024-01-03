import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    discountedPrice: "",
    discountPersent: "",
    brand: "",
    color: "",
    quantity: "",
    size: "",
    imageUrl: "",
    category: "",
    childCategory: "",
    subChildCategory: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);

  const params = useParams();
  console.log(params.id);

  const handleUpdateProduct = async () => {
    try {
      const response = await axios.get(
        `https://node-mongodb-api-4zq2.onrender.com/api/admin/get/single/product/${params.id}`
      );
      setProduct(response.data.singleProduct);
      setIsEditMode(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleUpdateProduct();
  }, []);


  const handleChange = (e) => {
    const { name, type } = e.target;
    if (type === "file") {
      const files = Array.from(e.target.files);
      const imageUrls = [];
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          imageUrls.push(reader.result);
          setProduct((prevProduct) => ({ ...prevProduct, [name]: imageUrls }));
        };
        reader.readAsDataURL(file);
      });
    }
    else {
      const { value } = e.target;
      setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Perform your API call to update the product
      const response = await axios.put(
        `https://node-mongodb-api-4zq2.onrender.com/api/admin/product/update/${params.id}`,
        product
      );
      toast.success("Product details updated successfully");

      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="w-full pb-5">
        <div className="space-y-10">
          <div className="flex w-full justify-center">
            <h1 className="text-5xl xsm:text-4xl">Update Product</h1>
          </div>
          <div className="">
            <form
              action=""
              onSubmit={handleSubmit}
              className="flex flex-col space-y-5"
            >
              <div>
                <input
                  type="file"
                  name="imageUrl"
                  multiple
                  accept="image/*"
                  onChange={handleChange}
                  className="border w-full p-4 rounded-lg"
                />
              </div>
              <div className="flex space-x-5 xsm:flex-wrap xsm:space-x-0 xsm:space-y-5">
                <input
                  type="text"
                  name="brand"
                  value={isEditMode ? product.brand || "" : ""}
                  onChange={handleChange}
                  placeholder="Brand"
                  className="p-4 rounded-lg border w-full"
                />
                <input
                  type="text"
                  name="title"
                  value={product.title}
                  onChange={handleChange}
                  placeholder="Title"
                  className="p-4 rounded-lg border w-full"
                />
              </div>
              <div className="flex space-x-5 xsm:flex-wrap xsm:space-x-0 xsm:space-y-5">
                <input
                  type="text"
                  name="color"
                  value={product.color}
                  onChange={handleChange}
                  placeholder="Color"
                  className="p-4 rounded-lg border w-full"
                />
                <input
                  type="text"
                  name="quantity"
                  value={product.quantity}
                  onChange={handleChange}
                  placeholder="Quantity"
                  className="p-4 rounded-lg border w-full"
                />
              </div>
              <div className="flex space-x-5 xsm:flex-wrap xsm:space-x-0 xsm:space-y-5">
                <input
                  type="text"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  placeholder="Price"
                  className="p-4 rounded-lg border w-full"
                />
                <input
                  type="text"
                  name="discountedPrice"
                  value={product.discountedPrice}
                  onChange={handleChange}
                  placeholder="Discounted Price"
                  className="p-4 rounded-lg border w-full"
                />
                <input
                  type="text"
                  name="discountPersent"
                  value={product.discountPersent}
                  onChange={handleChange}
                  placeholder="Discount Percentage"
                  className="p-4 rounded-lg border w-full"
                />
              </div>
              <div
                className="w-full">
                <select name="size" id="" value={product.size} onChange={handleChange} className="p-4 border rounded-lg w-full bg-white" >
                  <option value="select size">select size</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="2XL">2XL</option>
                </select>
              </div>
              <div className="flex space-x-5 xsm:flex-wrap xsm:space-x-0 xsm:space-y-5">
                <select
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  id=""
                  className="p-4 border rounded-lg w-full bg-white"
                  disabled
                >
                  <option value={product.category}>{product.category}</option>
                </select>
                <select
                  name="childCategory"
                  value={product.childCategory}
                  onChange={handleChange}
                  id=""
                  className="p-4 border rounded-lg w-full bg-white"
                  disabled
                >
                  <option value={product.childCategory}>{product.childCategory}</option>
                </select>
                <select
                  name="subChildCategory"
                  id=""
                  value={product.subChildCategory}
                  onChange={handleChange}
                  className="p-4 border rounded-lg w-full bg-white"
                  disabled
                >
                  <option value={product.subChildCategory}>{product.subChildCategory}</option>
                </select>
              </div>
              <div>
                <textarea
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  id=""
                  cols="30"
                  rows="5"
                  className="w-full border rounded-lg p-4"
                  placeholder="Description"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-blue-400 border p-4 rounded-lg"
                >
                  UPDATE PRODUCT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
