import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import { getCartProduct, removeCartProduct } from "../../utils/queries";
import { toast } from "react-toastify";
import axios from "axios";

const Cart = () => {
  const navigate = useNavigate();

  const [cartProduct, setCartProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [subTotalItem, setSubTotalItem] = useState();
  const [subTotalPrice, setSubTotalPrice] = useState();
  const [totalPrice, setTotalPrice] = useState();

  const handleCheckOut = () => {
    navigate("/checkout?step=2");
  };
  const token = localStorage.getItem("authToken");
  const get_cart_product = async () => {
    const res = await axios.get(`${process.env.LOCALHOST_URL}api/cartitem`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setCartProduct(res.data.cartProduct);
    let price = res.data.cartProduct.reduce((acc, tot) => {
      return acc + tot.price * tot.quantity;
    }, 0);

    let totalPrice = res.data.cartProduct.reduce((acc, tot) => {
      return acc + tot.product.discountedPrice * tot.quantity;
    }, 0);

    let quantity = res.data.cartProduct.reduce((acc, tot) => {
      return acc + tot.quantity;
    }, 0);
    setSubTotalItem(quantity);
    setSubTotalPrice(price);
    setTotalPrice(totalPrice);
  };

  const handleDelete = async (id) => {
    const res = await removeCartProduct(id);
    toast.success("Product remove successfully");
  };

  const handleQty = async (product_Id, action) => {
    console.log("gfugify", product_Id, action);
    const res = await axios.put(
      `${process.env.LOCALHOST_URL}api/cartitem/${product_Id}`,
      { action }
    );
  };

  useEffect(() => {
    get_cart_product();
  }, [quantity]);

  console.log('cart------', cartProduct);

  return (
    <>
      <div className="lg:grid grid-cols-3 px-5 lg:px-16 relative mt-3 lg:space-x-5">
        <div className="col-span-2 space-y-2">
          {cartProduct.map((item) => (
            <CartItem
              cartProduct={item}
              setSubTotalPrice={setSubTotalPrice}
              subTotalPrice={subTotalPrice}
              handleDelete={handleDelete}
              quantity={quantity}
              setQuantity={setQuantity}
              handleQty={handleQty}
            />
          ))}
        </div>
        <div className="p-5 sticky top-0 h-fit mt-5 lg:mt-0 shadow-custom">
          <div className="">
            <p className="uppercase opacity-60 font-bold pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Subtotal ({subTotalItem} item)</span>
                <span>₹{subTotalPrice}</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Disccount</span>
                <span className="text-green-700">
                  -₹{Math.floor(subTotalPrice - totalPrice)}
                </span>
              </div>

              <div className="flex justify-between pt-3">
                <span>Delivery Charge</span>
                <span className="text-green-700">Free</span>
              </div>
              <div className="flex justify-between pt-3 font-bold">
                <span>Total Amount</span>
                <span className="text-green-700">
                  ₹{Math.floor(totalPrice)}
                </span>
              </div>
            </div>
            <button
              onClick={handleCheckOut}
              className="bg-violet-500 text-white w-full p-2 rounded-md"
            >
              CHECK OUT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
