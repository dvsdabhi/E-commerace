import React from "react";
import Sidebar from "../admin/components/Sidebar";
import Dashbord from "../admin/components/Dashbord";
import { Route, Routes } from "react-router-dom";
import Addproduct from "../admin/components/Addproduct";
import Product from "../admin/components/Product";
import Customer from "../admin/components/Customer";
import Order from "../admin/components/Order";
import Header from "../admin/components/Header";
import UpdateProduct from "../admin/components/UpdateProduct";

const AdminRouter = () => {
  return (
    <>
      <div className="flex xsm:flex-col h-full">
        <div className="xsm:hidden">
          <Sidebar />
        </div>
        <div className="sm:hidden">
          <Header/>
        </div>
        <div className="w-full p-10 overflow-y-scroll">
          <Routes>
            <Route path="/" element={<Dashbord />} />
            <Route path="/product" element={<Product />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/order" element={<Order />} />
            <Route path="/addproduct" element={<Addproduct />} />
            <Route path="/product/update/:id" element={<UpdateProduct />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default AdminRouter;
