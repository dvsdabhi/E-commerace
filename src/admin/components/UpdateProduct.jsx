import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [sizes, setSizes] = useState([
    { name: "S", quantity: "" },
    { name: "M", quantity: "" },
    { name: "L", quantity: "" },
  ]);

  const [singleProduct, setSingleProduct] = useState([]);
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
  const [updateProduct, setUpdateProduct] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false); 

  const params = useParams();
  console.log(params.id);

  const handleUpdateProduct = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/admin/get/single/product/${params.id}`
      );
      setSingleProduct(response.data.singleProduct);
      setIsEditMode(true);
      //   console.log(response.data.singleProduct);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleUpdateProduct();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If in edit mode, update the updateProduct state
    if (isEditMode) {
        setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    } else {
      // If not in edit mode, update the singleProduct state
      setSingleProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
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
              //   onSubmit={handleSubmit}
              className="flex flex-col space-y-5"
            >
              <div>
                <input
                  type="file"
                  name="imageUrl"
                  //   value={product.imageUrl}
                  //   onChange={handleChange}
                  className="border w-full p-4 rounded-lg"
                />
              </div>
              <div className="flex space-x-5 xsm:flex-wrap xsm:space-x-0 xsm:space-y-5">
                <input
                  type="text"
                  name="brand"
                  value={isEditMode ? singleProduct.brand || "" : ""}
                  onChange={handleChange}
                  placeholder="Brand"
                  className="p-4 rounded-lg border w-full"
                />
                <input
                  type="text"
                  name="title"
                  value={singleProduct.title}
                  onChange={handleChange}
                  placeholder="Title"
                  className="p-4 rounded-lg border w-full"
                />
              </div>
              <div className="flex space-x-5 xsm:flex-wrap xsm:space-x-0 xsm:space-y-5">
                <input
                  type="text"
                  name="color"
                  value={singleProduct.color}
                  onChange={handleChange}
                  placeholder="Color"
                  className="p-4 rounded-lg border w-full"
                />
                <input
                  type="text"
                  name="quantity"
                  value={singleProduct.quantity}
                  onChange={handleChange}
                  placeholder="Quantity"
                  className="p-4 rounded-lg border w-full"
                />
              </div>
              <div className="flex space-x-5 xsm:flex-wrap xsm:space-x-0 xsm:space-y-5">
                <input
                  type="text"
                  name="price"
                  value={singleProduct.price}
                  onChange={handleChange}
                  placeholder="Price"
                  className="p-4 rounded-lg border w-full"
                />
                <input
                  type="text"
                  name="discountedPrice"
                  value={singleProduct.discountedPrice}
                  onChange={handleChange}
                  placeholder="Discounted Price"
                  className="p-4 rounded-lg border w-full"
                />
                <input
                  type="text"
                  name="discountPersent"
                  value={singleProduct.discountPersent}
                  onChange={handleChange}
                  placeholder="Discount Percentage"
                  className="p-4 rounded-lg border w-full"
                />
              </div>
              <div className="flex space-x-5 xsm:flex-wrap xsm:space-x-0 xsm:space-y-5">
                <select
                  name="category"
                  value={singleProduct.category}
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
                  value={singleProduct.childCategory}
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
                  value={singleProduct.subChildCategory}
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
                  value={singleProduct.description}
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
                      //   onChange={(e) =>
                      //     handleInputChange(index, "name", e.target.value)
                      //   }
                      className="p-4 border w-full rounded-lg"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Quantity"
                    value={size.quantity}
                    // onChange={(e) =>
                    //   handleInputChange(index, "quantity", e.target.value)
                    // }
                    className="p-4 border w-full rounded-lg"
                  />
                </div>
              ))}

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
