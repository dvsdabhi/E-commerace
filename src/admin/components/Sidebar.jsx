import React from "react";
import { BsGrid1X2Fill } from "react-icons/bs";
import { MdAccountCircle, MdProductionQuantityLimits,MdAssignmentAdd } from "react-icons/md";
import { BsFillPeopleFill,BsCart4 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col justify-between h-full w-60 shadow-2xl">
        <div className="flex flex-col py-5 space-y-5">
          <div className="flex items-center px-5 space-x-14 text-gray-600">
            <BsGrid1X2Fill className="text-lg"/>
            <button
              className="text-lg font-medium"
              onClick={(e) => navigate("/admin")}
            >
              Dashbord
            </button>
          </div>
          <hr className="border w-full border-gray-400" />
          <div className="flex items-center px-5 space-x-14 text-gray-600">
            <MdProductionQuantityLimits className="text-2xl" />
            <button
              className="text-lg font-medium"
              onClick={(e) => navigate("/admin/product")}
            >
              Products
            </button>
          </div>
          <hr className="border w-full border-gray-400" />
          <div className="flex items-center px-5 space-x-14 text-gray-600">
            <BsFillPeopleFill className="text-2xl" />
            <button
              className="text-lg font-medium"
              onClick={(e) => navigate("/admin/customer")}
            >
              Customers
            </button>
          </div>
          <hr className="border w-full border-gray-400" />
          <div className="flex items-center px-5 space-x-14 text-gray-600">
            <BsCart4 className="text-2xl" />
            <button
              className="text-lg font-medium"
              onClick={(e) => navigate("/admin/order")}
            >
              Orders
            </button>
          </div>
          <hr className="border w-full border-gray-400" />
          <div className="flex items-center px-5 space-x-14 text-gray-600">
            <MdAssignmentAdd className="text-2xl" />
            <button
              className="text-lg font-medium"
              onClick={(e) => navigate("/admin/addproduct")}
            >
              AddProduct
            </button>
          </div>
          <hr className="border w-full border-gray-400" />
        </div>
        <div>
          <div className="flex items-center p-5 space-x-14 text-gray-600">
            <MdAccountCircle className="text-3xl" />
            <button className="text-lg font-medium">Profile</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
