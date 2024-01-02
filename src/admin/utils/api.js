import axios from "axios";

export const add_product = async (product) => {
  const response = await axios.post(
    `${process.env.LOCALHOST_URL}api/admin/add/product`,
    product
  );
  return response;
};
