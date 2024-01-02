import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "../../../redux/features/Auth";

const UserProfile = ({ setUserProfile }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOrder = () => {
    navigate("/account/order");
    setUserProfile(false);
  };

  const handleProfile = () => {
    navigate("/user/profile");
    setUserProfile(false);
  };

  const handleLogOut = async () => {
    localStorage.removeItem("authToken");
    dispatch(checkAuth());
    setUserProfile(false);
    navigate("/");
  };

  return (
    <>
      <div className="absolute z-50 right-72 xsm:right-0 sm:right-0 md:right-72">
        <div className="shadow-custom w-fit p-3 space-y-2 bg-white">
          <div className="flex flex-col space-y-2">
            <button className="hover:bg-gray-200" onClick={handleProfile}>Profile</button>
            <button onClick={handleOrder} className="hover:bg-gray-200">
              My Orders
            </button>
            <button onClick={handleLogOut} className="hover:bg-gray-200">
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
