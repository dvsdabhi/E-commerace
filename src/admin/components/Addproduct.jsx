import React, { useState } from "react";
import { toast } from "react-toastify";
import { add_product } from "../utils/api";

const Addproduct = () => {

  const categories = [
    {
      "id": "women",
      "name": "women",
      "subcategories": [
        {
          "id": "Clothing",
          "name": "Clothing",
          "items": ["dresses", "tops", "bottoms", "sarees", "pants", "denim", "sweaters", "t-shirts"]
        },
        {
          "id": "Shoes",
          "name": "Shoes",
          "items": ["heels", "flats", "sneakers"]
        },
        {
          "id": "Watches",
          "name": "Watches",
          "items": ["analog watches", "digital watches"]
        },
      ]
    },
    {
      "id": "men",
      "name": "men",
      "subcategories": [
        {
          "id": "Clothing",
          "name": "Clothing",
          "items": ["Shirts", "T-shirts", "Pants"]
        },
        {
          "id": "Shoes",
          "name": "Shoes",
          "items": ["Formal Shoes", "Casual Shoes", "Sneakers"]
        },
        {
          "id": "Watches",
          "name": "Watches",
          "items": ["Analog Watches", "Smartwatches"]
        },
      ]
    },
  ]

  const [selectedSize, setSelectedSize] = useState("");
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    discountedPrice: "",
    discountPersent: "",
    brand: "",
    color: "",
    quantity: "",
    sizes: "",
    imageUrl: [],
    category: "",
    childCategory: "",
    subChildCategory: "",
  });

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [selectedThirdCategory, setSelectedThirdCategory] = useState("");

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
    } else {
      const { value } = e.target;
      switch (name) {
        case "category":
          setSelectedCategory(value);
          setSelectedSubcategory("");
          setSelectedThirdCategory("");
          break;
        case "childCategory":
          setSelectedSubcategory(value);
          setSelectedThirdCategory("");
          break;
        case "subChildCategory":
          setSelectedThirdCategory(value);
          break;
        case "size":
          setSelectedSize(value);
          break;
        default:
          setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
          break;
      }
      setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await add_product(product);
      toast.success("product added successfully");
      setProduct({
        title: "",
        description: "",
        price: "",
        discountedPrice: "",
        discountPersent: "",
        brand: "",
        color: "",
        quantity: "",
        sizes: "",
        imageUrl: "",
        category: "",
        childCategory: "",
        subChildCategory: "",
      });
    } catch (error) {
      console.log(error.message);
    }
    console.log("data new", product);
  };

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
              <div
                className="w-full">
                <select name="size" id="" value={selectedSize} onChange={handleChange} className="p-4 border rounded-lg w-full bg-white" >
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
                  value={selectedCategory}
                  onChange={handleChange}
                  id=""
                  className="p-4 border rounded-lg w-full bg-white"
                >
                  <option value="">Top level category</option>
                  {categories.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select
                  name="childCategory"
                  value={selectedSubcategory}
                  onChange={handleChange}
                  id=""
                  className="p-4 border rounded-lg w-full bg-white"
                >
                  <option value="">Second level category</option>
                  {categories
                    .find((category) => category.name === selectedCategory)
                    ?.subcategories.map((subCategory) => (
                      <option key={subCategory.id} value={subCategory.name}>
                        {subCategory.name}
                      </option>
                    ))}
                </select>
                <select
                  name="subChildCategory"
                  id=""
                  value={selectedThirdCategory}
                  onChange={handleChange}
                  className="p-4 border rounded-lg w-full bg-white"
                >
                  <option value="">Third level category</option>
                  {categories
                    .find((category) => category.name === selectedCategory)
                    ?.subcategories.find(
                      (subCategory) => subCategory.name === selectedSubcategory
                    )?.items.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
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