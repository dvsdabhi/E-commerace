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
export const signIn = async (signInData) => {
  const response = await axios.post(
    `http://localhost:8080/api/auth/signin`,
    signInData
  );
  return response;
};

// get all product api.

export const getAllProduct = async () => {
  const response = await axios.get(
    "http://localhost:8080/api/admin/get/product"
  );
  return response;
};

// get Single product api.

export const getSingleProduct = async (productID) => {
  const response = await axios.get(
    `http://localhost:8080/api/admin/get/single/product/${productID}`
  );
  return response;
};
