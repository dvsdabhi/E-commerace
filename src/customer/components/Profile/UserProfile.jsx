import React from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = ({ setUserProfile }) => {
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate("/account/order");
    setUserProfile(false);
  };

  return (
    <>
      <div className="absolute z-50 right-72">
        <div className="shadow-custom w-fit p-3 space-y-2 bg-white">
          <div className="flex flex-col space-y-2">
            <button className="hover:bg-gray-200">Profile</button>
            <button onClick={handleOrder} className="hover:bg-gray-200">
              My Orders
            </button>
            <button className="hover:bg-gray-200">Logout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
