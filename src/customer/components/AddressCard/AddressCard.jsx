import axios from "axios";
import React from "react";

const AddressCard = ({ address, setSelectAddress }) => {
  const token = localStorage.getItem("authToken");

  const handleSelectAddress = async (id) => {
    console.log("id", id);
    const response = await axios.put(
      `https://node-mongodb-api-4zq2.onrender.com/api/selectAddress`,
      { _id: id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("response", response);
    setSelectAddress(id);
  };

  return (
    <>
      <div>
        {address?.map((item) => (
          <div key={item._id} className="space-y-3 my-3">
            <p className="font-semibold">
              {item.firstName} {item.lastName}
            </p>
            <p>
              {item.streetAddress} ,{item.zipCode}
            </p>
            <div className="space-y-1">
              <p className="font-semibold">Phone Number</p>
              <p>{item.mobile}</p>
            </div>
            {item.select === true ? (
              <button
                className="border rounded-lg p-3 bg-green-600 hover:bg-green-500 text-white"
                onClick={() => handleSelectAddress(item._id)}
              >
                {item.select === true ? "Address Selected" : "Select Address"}
              </button>
            ) : (
              <button
                className="border rounded-lg p-3 bg-violet-600 hover:bg-violet-500 text-white"
                onClick={() => handleSelectAddress(item._id)}
              >
                {item.select === true ? "Address Selected" : "Select Address"}
              </button>
            )}
            <hr className="border border-black" />
          </div>
        ))}
        {/* )} */}
      </div>
    </>
  );
};

export default AddressCard;
