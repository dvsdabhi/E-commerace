import React, { useState, useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeliveryAddressForm = () => {
  const [showAddress, setAddressData] = useState(false);
  const [address, setAddress] = useState();
  const [selectAddress, setSelectAddress] = useState();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    mobile: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("address");
    // console.log("data---->>>>", formData);
    // setAddressData(true);
  };

  const token = localStorage.getItem("authToken");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDelivery = async () => {
    navigate("/checkout?step=3");
  };

  const handleAddAddress = async () => {
    console.log("token", token);
    console.log("formData---", formData);
    const response = await axios.post(
      `https://node-mongodb-api-4zq2.onrender.com/api/address`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log("response------", response);
  };

  const handleAddress = async () => {
    try {
      const response = await axios.get(
        `https://node-mongodb-api-4zq2.onrender.com/api/userAddress`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAddress(response.data.Address);
      response.data.Address.map((item) => {
        if (item.select === true) {
          setAddressData(true);
        }
      });
      // console.log("--------------------", response.data.Address);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleAddress();
  }, [selectAddress]);

  // console.log("address", selectAddress);

  // console.log("-==-=-=-===-=-=-=-=-",showAddress);

  return (
    <>
      <div className="p-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="grid border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
            <div className="p-5 py-7 border-b cursor-pointer">
              <AddressCard
                address={address}
                setSelectAddress={setSelectAddress}
              />
              {showAddress && (
                <button
                  className="bg-violet-600 hover:bg-blue-600 text-white p-3 px-6 rounded-md mt-2"
                  onClick={handleDelivery}
                >
                  Deliver to this address
                </button>
              )}
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
                    name="firstName"
                    value={formData.firstName}
                    className="border-2 outline-none rounded-md p-2 w-full"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name *"
                    id="LastName"
                    name="lastName"
                    value={formData.lastName}
                    className="border-2 outline-none rounded-md p-2 w-full"
                    onChange={handleChange}
                    required
                  />
                </div>
                <textarea
                  name="streetAddress"
                  value={formData.streetAddress}
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
                    name="city"
                    value={formData.city}
                    className="border-2 outline-none rounded-md p-2 w-full"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="State/Province/Region *"
                    id="State"
                    name="state"
                    value={formData.state}
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
                    name="zipCode"
                    value={formData.zipCode}
                    className="border-2 outline-none rounded-md p-2 w-full"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="number"
                    placeholder="Phone Number *"
                    id="PhoneNumber"
                    name="mobile"
                    value={formData.mobile}
                    className="border-2 outline-none rounded-md p-2 w-full"
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  className="bg-violet-600 hover:bg-blue-600 text-white p-3 px-6 rounded-md mt-2"
                  type="submit"
                  onClick={handleAddAddress}
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
