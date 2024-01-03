import axios from "axios";

export const add_product = async (product) => {
  const response = await axios.post(
    `https://node-mongodb-api-4zq2.onrender.com/api/admin/add/product`,
    product
  );
  return response;
};
