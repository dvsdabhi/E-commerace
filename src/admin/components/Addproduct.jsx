import React, { useState } from "react";

const Addproduct = () => {
  const [product,setProduct] = useState({
    title:"",
    description:"",
    price:"",
    discountedPrice:"",
    discountPersent:"",
    brand:"",
    color:"",
    sizes:[{name:"",quantity:""}],
    imageUrl:"",
    // toplevel
  });
  return (
    <>
      <div className="w-full pb-5">
        <div className="space-y-10">
          <div className="flex w-full justify-center">
            <h1 className="text-5xl xsm:text-4xl">Add New Product</h1>
          </div>
          <div className="">
            <form action="" className="flex flex-col space-y-5">
              <div>
                <input type="file" name="" value={""} className="border w-full p-4 rounded-lg" />
              </div>
              <div className="flex space-x-5 xsm:flex-wrap xsm:space-x-0 xsm:space-y-5">
                <input type="text" placeholder="Brand" className="p-4 rounded-lg border w-full"/>
                <input type="text" placeholder="Title" className="p-4 rounded-lg border w-full"/>
              </div>
              <div className="flex space-x-5 xsm:flex-wrap xsm:space-x-0 xsm:space-y-5">
                <input type="text" placeholder="Color" className="p-4 rounded-lg border w-full"/>
                <input type="text" placeholder="Quantity" className="p-4 rounded-lg border w-full"/>
              </div>
              <div className="flex space-x-5 xsm:flex-wrap xsm:space-x-0 xsm:space-y-5">
                <input type="text" placeholder="Price" className="p-4 rounded-lg border w-full"/>
                <input type="text" placeholder="Discounted Price" className="p-4 rounded-lg border w-full"/>
                <input type="text" placeholder="Discount Percentage" className="p-4 rounded-lg border w-full"/>
              </div>
              <div className="flex space-x-5 xsm:flex-wrap xsm:space-x-0 xsm:space-y-5">
                <select name="" id="" className="p-4 border rounded-lg w-full bg-white">
                  <option value="">Top level category</option>
                  <option value="">Men</option>
                  <option value="">Women</option>
                  <option value="">Kids</option>
                </select>
                <select name="" id="" className="p-4 border rounded-lg w-full bg-white">
                  <option value="">Second level category</option>
                  <option value="">Men</option>
                  <option value="">Women</option>
                  <option value="">Kids</option>
                </select>
                <select name="" id="" className="p-4 border rounded-lg w-full bg-white">
                  <option value="">Third level category</option>
                  <option value="">Men</option>
                  <option value="">Women</option>
                  <option value="">Kids</option>
                </select>
              </div>
              <div>
                <textarea name="" id="" cols="30" rows="5" className="w-full border rounded-lg p-4" placeholder="Description"></textarea>
              </div>
              <div className="flex space-x-5 xsm:flex-wrap xsm:space-x-0 xsm:space-y-5">
                <div className="relative w-full">
                  <label htmlFor="" className="absolute -mt-3 text-gray-400 mx-5 w-fit bg-white">Size Name*</label>
                  <input type="text" placeholder="" value="S" className="p-4 border w-full rounded-lg" />
                </div>
                <input type="text" placeholder="Quantity" className="p-4 border w-full rounded-lg" />
              </div>
              <div className="flex space-x-5 xsm:flex-wrap xsm:space-x-0 xsm:space-y-5">
                <div className="relative w-full">
                  <label htmlFor="" className="absolute -mt-3 text-gray-400 mx-5 w-fit bg-white">Size Name*</label>
                  <input type="text" placeholder="" value="M" className="p-4 border w-full rounded-lg" />
                </div>
                <input type="text" placeholder="Quantity" className="p-4 border w-full rounded-lg" />
              </div>
              <div className="flex space-x-5 xsm:flex-wrap xsm:space-x-0 xsm:space-y-5">
                <div className="relative w-full">
                  <label htmlFor="" className="absolute -mt-3 text-gray-400 mx-5 w-fit bg-white">Size Name*</label>
                  <input type="text" placeholder="" value="L" className="p-4 border w-full rounded-lg" />
                </div>
                <input type="text" placeholder="Quantity" className="p-4 border w-full rounded-lg" />
              </div>
              <div>
                <button className="bg-blue-400 border p-4 rounded-lg">ADD NEW PRODUCT</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addproduct;
