import axios from "axios";

export const add_product = async (product) => {
  const response = await axios.post(
    `http://localhost:8080/api/admin/add/product`,
    product
  );
  return response;
};
