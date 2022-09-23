import React from "react";
import { ClearCart } from "../redux/CartSlice";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ClearCartComponent = () => {
  const { Totalquantity } = useSelector(state => state.Myitems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (Totalquantity < 1) {
      setTimeout(() => {
        navigate("/Cart");
      }, 2000);
    }
  }, [Totalquantity, navigate, dispatch]);
  //const { ClearCart } = useContext(CartContentdata);
  return (
    <div>
      <button
        onClick={() => dispatch(ClearCart())}
        type="button"
        className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Clear Cart
      </button>
    </div>
  );
};
export default ClearCartComponent;
