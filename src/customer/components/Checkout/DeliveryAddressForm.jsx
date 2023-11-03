import React, { useState } from "react";
import AddressCard from "../AddressCard/AddressCard";

const DeliveryAddressForm = () => {
    const [showAddress,setAddressData] = useState(false);
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Address: "",
    City: "",
    State: "",
    Pincode: "",
    PhoneNumber: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("address");
    console.log("data---->>>>",formData);
    setAddressData(true);
  };

  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData({ ...formData, [name]: value });
  };

  

  return (
    <>
      <div className="p-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="grid border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
            <div className="p-5 py-7 border-b cursor-pointer">
              <AddressCard formData={formData} showAddress={showAddress}/>
              <button className="bg-violet-600 hover:bg-blue-600 text-white p-3 px-6 rounded-md mt-2">
                Deliver Here
              </button>
            </div>
          </div>
          <div>
            <div className="shadow-xl">
              <form onSubmit={handleSubmit} className="p-3 space-y-5">
                <div className="flex justify-evenly space-x-5">
                  <input
                    type="text"
                    placeholder="First Name *"
                    id="FirstName"
                    name="FirstName"
                    value={formData.FirstName}
                    className="border-2 outline-none rounded-md p-2 w-full"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name *"
                    id="LastName"
                    name="LastName"
                    value={formData.LastName}
                    className="border-2 outline-none rounded-md p-2 w-full"
                    onChange={handleChange}
                    required
                  />
                </div>
                <textarea
                  name="Address"
                  value={formData.Address}
                  id="Address"
                  cols="30"
                  rows="10"
                  placeholder="Address *"
                  className="w-full p-2 border-2 outline-none rounded-md"
                  onChange={handleChange}
                />
                <div className="flex justify-evenly space-x-5">
                  <input
                    type="text"
                    placeholder="City *"
                    id="City"
                    name="City"
                    value={formData.City}
                    className="border-2 outline-none rounded-md p-2 w-full"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="State/Province/Region *"
                    id="State"
                    name="State"
                    value={formData.State}
                    className="border-2 outline-none rounded-md p-2 w-full"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex justify-evenly space-x-5">
                  <input
                    type="number"
                    placeholder="Zip / Postal code *"
                    id="Pincode"
                    name="Pincode"
                    value={formData.Pincode}
                    className="border-2 outline-none rounded-md p-2 w-full"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="number"
                    placeholder="Phone Number *"
                    id="PhoneNumber"
                    name="PhoneNumber"
                    value={formData.PhoneNumber}
                    className="border-2 outline-none rounded-md p-2 w-full"
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  className="bg-violet-600 hover:bg-blue-600 text-white p-3 px-6 rounded-md mt-2"
                  type="submit"
                >
                  Deliver Here
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryAddressForm;
