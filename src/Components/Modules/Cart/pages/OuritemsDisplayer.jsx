import React from "react";
//import CartHeader from './CartHeader/CartHeader'
import OuritemsMap from "./OuritemsMap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import { useEffect } from "react";
//import { useDispatch } from "react-redux";
//import { UpdateTotalQuantity } from "../../MyApp/Slice";
//import CartMap from './CartContent/CartMap'
const CartDisplayer = () => {
  const { Totalquantity } = useSelector(state => state.Myitems);

  return (
    <div>
      {/* <ModalContent /> */}

      <div className="text-center m-auto">
        <h1 className="text-3xl">
          Your Products in the Cart is {Totalquantity}
        </h1>
      </div>
      <div className="text-center">
        {Totalquantity ? (
          <Link to="/CartPage">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Go to Cart
            </button>
          </Link>
        ) : null}
      </div>
      <div className="grid grid-cols-4 gap-y-16">
        <OuritemsMap />
      </div>
    </div>
  );
};

export default CartDisplayer;
