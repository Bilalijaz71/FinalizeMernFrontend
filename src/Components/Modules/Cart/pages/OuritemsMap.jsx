import React from "react";
import Ouritems from "./Ouritems";
import { useSelector } from "react-redux";
//import { CartContentdata } from './CartContent';
//import { useContext } from 'react';
const OuritemsMap = () => {
  const { items } = useSelector(state => state.Myitems);

  return items.map(Currentdata => {
    return <Ouritems key={Currentdata.id} {...Currentdata} />;
  });
};

export default OuritemsMap;
