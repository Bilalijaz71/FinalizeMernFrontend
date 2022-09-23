import React from "react";
import Cartitems from "./Cartitems";
import { useSelector } from "react-redux";
//import { useNavigate } from "react-router-dom";
//import { useEffect } from "react";
//import { CartContentdata } from "../CartContent";
const CartMap = () => {
  const item = useSelector(state => state.Myitems.items);

  return item.map(Currentdata => {
    if (Currentdata.quantity > 0) {
      return <Cartitems key={Currentdata.id} {...Currentdata} />;
    }

    return null;
  });
};
export default CartMap;
