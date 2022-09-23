import axios from "axios";

const Api_url = "http://localhost:8000/api/Products/";
const Cart_Api_url = "http://localhost:8000/api/Cart/";

const Products = async () => {
  const response = await axios.get(Api_url + "getProduct");
  if (response.data) {
    // localStorage.setItem("Products", JSON.stringify(response.data));
  }
  return response.data;
};
const Cartdata = async (reqdata, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(Cart_Api_url, reqdata, config);
  return response.data;
};

const Cartdataget = async token => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(Cart_Api_url + "get", config);

  return response.data;
};
const CartService = {
  Products,
  Cartdata,
  Cartdataget,
};
export default CartService;
