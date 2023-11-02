import React from "react";
import HomePage from "../customer/pages/HomePage/HomePage";
// import Signup from "../customer/components/Signup/Signup";
import { Routes, Route } from "react-router-dom";
import WomenAssessories from "../customer/components/WomenAssessories/WomenAssessories";
import Product from "../customer/components/Product/Product";
// import SignIn from "../customer/components/SignIn/SignIn";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Cart from "../customer/components/Cart/Cart";
const Allrouter = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} /> */}
          <Route path="/women" element={<WomenAssessories />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
};

export default Allrouter;
