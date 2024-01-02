require('dotenv').config();
import axios from "axios";

// signUp api call
export const signUp = async (signUpData) => {
  const response = await axios.post(
    `http://localhost:8080/api/auth/signup`,
    signUpData
  );
  return response;
};

// signIn api call
export const signIn = async (signInData,token) => {
  const response = await axios.post(
    `${process.env.LOCALHOST_URL}api/auth/signin`,
    signInData,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};

// get all product api.

export const getAllProduct = async () => {
  const response = await axios.get(
    `${process.env.LOCALHOST_URL}api/admin/product`
  );
  return response;
};

// get filter product api.

export const getFilterProduct = async (lavelOne,lavelThree) => {
  console.log(lavelOne,lavelThree);
  const response = await axios.get(
    `${process.env.LOCALHOST_URL}api/admin/product/${lavelOne}/${lavelThree}`
  );
  return response;
};

// get Single product api.
// const token = localStorage.getItem("authToken");
export const getSingleProduct = async (productID) => {
  const response = await axios.get(
    `${process.env.LOCALHOST_URL}api/admin/get/single/product/${productID}`
  );
  return response;
};

// remove cartProduct
export const removeCartProduct = async (id) => {
  try {
    const response = await axios.delete(
      `${process.env.LOCALHOST_URL}api/cartitem/${id}`
    );
    return response;
  } catch (error) {
    console.log("delete error", error);
  }
};