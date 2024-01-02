import React from "react";
import HomePage from "../customer/pages/HomePage/HomePage";
// import Signup from "../customer/components/Signup/Signup";
import { Routes, Route } from "react-router-dom";
import WomenAssessories from "../customer/components/WomenAssessories/WomenAssessories";
import Product from "../customer/components/Product/Product";
// import SignIn from "../customer/components/SignIn/SignIn";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Cart from "../customer/components/Cart/Cart";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";
import Navigation1 from "../customer/components/Navigation/Navigation1";
import Footer from "../customer/components/Footer/Footer";
import OrderSummary from "../customer/components/Checkout/OrderSummary";
import Payment from "../customer/components/Checkout/Payment";
import Success from "../customer/components/Checkout/Success";
import ViewProfile from "../customer/components/Profile/ViewProfile";
import Allreview from "../customer/components/ProductDetails/Allreview";
const Allrouter = () => {
  return (
    <>
      <div>
        <div>
          <Navigation1 />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/:lavelOne/:lavelTwo/:lavelThree"
            element={<Product />}
          />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/:orderId" element={<Payment />} />
          <Route path="/payment/:orderId" element={<Success />} />
          <Route path="/account/order" element={<Order />} />
          <Route path="/user/profile" element={<ViewProfile />} />
          <Route
            path="/account/order/:orderId1/:orderId2"
            element={<OrderDetails />}
          />
          <Route path="/ordersummary" element={<OrderSummary />} />
          <Route path="/allreview/:productId" element={<Allreview />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Allrouter;
