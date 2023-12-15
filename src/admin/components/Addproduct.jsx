import React, { useState } from "react";
import { add_product } from "../utils/api";

const Addproduct = () => {
  const [sizes, setSizes] = useState([
    { name: "S", quantity: "" },
    { name: "M", quantity: "" },
    { name: "L", quantity: "" },
  ]);

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    discountedPrice: "",
    discountPersent: "",
    brand: "",
    color: "",
    quantity: "",
    sizes: sizes,
    imageUrl: "",
    category: "",
    childCategory: "",
    subChildCategory: "",
  });

  const handleInputChange = (index, property, value) => {
    const updatedSize = [...sizes];
    updatedSize[index][property] = value;
    setSizes(updatedSize);
  };

  const handleChange = (e) => {
    const { name, type } = e.target;
    if (type === "file") {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const imageUrl = reader.result;
          setProduct((prevProduct) => ({ ...prevProduct, [name]: imageUrl }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      const { value } = e.target;
      setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await add_product(product);
      console.log("res---------->>>>>>", res);
      setProduct({
        title: "",
        description: "",
        price: "",
        discountedPrice: "",
        discountPersent: "",
        brand: "",
        color: "",
        quantity: "",
        sizes: sizes.map((size) => ({ ...size, quantity: "" })),
        imageUrl: "",
        category: "",
        childCategory: "",
        subChildCategory: "",
      });

      // Optionally, you can also reset the sizes state
      // setSizes([
      //   { name: "S", quantity: "" },
      //   { name: "M", quantity: "" },
      //   { name: "L", quantity: "" },
      // ]);
    } catch (error) {
      console.log(error.message);
    }
    console.log("data new", product);
  };

  // const addProduct = async () => {

  // }

  return (
    <>
      <div className="w-full pb-5">
        <div className="space-y-10">
          <div className="flex w-full justify-center">
            <h1 className="text-5xl xsm:text-4xl">Add New Product</h1>
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
                  // value={product.imageUrl}
                  onChange={handleChange}
                  className="border w-full p-4 rounded-lg"
                />
              </div>
              <div className="flex space-x-5 xsm:flex-wrap xsm:space-x-0 xsm:space-y-5">
                <input
                  type="text"
                  name="brand"
                  value={product.brand}
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
              <div className="flex space-x-5 xsm:flex-wrap xsm:space-x-0 xsm:space-y-5">
                <select
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  id=""
                  className="p-4 border rounded-lg w-full bg-white"
                >
                  <option value="">Top level category</option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Kids">Kids</option>
                </select>
                <select
                  name="childCategory"
                  value={product.childCategory}
                  onChange={handleChange}
                  id=""
                  className="p-4 border rounded-lg w-full bg-white"
                >
                  <option value="">Second level category</option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Kids">Kids</option>
                </select>
                <select
                  name="subChildCategory"
                  id=""
                  value={product.subChildCategory}
                  onChange={handleChange}
                  className="p-4 border rounded-lg w-full bg-white"
                >
                  <option value="">Third level category</option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Kids">Kids</option>
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
              {sizes.map((size, index) => (
                <div
                  key={index}
                  className="flex space-x-5 xsm:flex-wrap xsm:space-x-0 xsm:space-y-5"
                >
                  <div className="relative w-full">
                    <label
                      htmlFor=""
                      className="absolute -mt-3 text-gray-400 mx-5 w-fit bg-white"
                    >
                      Size Name*
                    </label>
                    <input
                      type="text"
                      value={size.name}
                      onChange={(e) =>
                        handleInputChange(index, "name", e.target.value)
                      }
                      className="p-4 border w-full rounded-lg"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Quantity"
                    value={size.quantity}
                    onChange={(e) =>
                      handleInputChange(index, "quantity", e.target.value)
                    }
                    className="p-4 border w-full rounded-lg"
                  />
                </div>
              ))}

              <div>
                <button
                  type="submit"
                  className="bg-blue-400 border p-4 rounded-lg"
                >
                  ADD NEW PRODUCT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addproduct;
