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
