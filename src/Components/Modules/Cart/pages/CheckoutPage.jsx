import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cartdata, ClearCart } from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
const CheckoutPage = () => {
  const dispatch = useDispatch();
  const { items, Totalquantity } = useSelector(state => state.Myitems);
  console.log("this is what items", items);
  const [order, setorder] = useState(false);
  const navigate = useNavigate();
  let price = [],
    quantity = [],
    description = [],
    totalprice = 0;

  const placeorder = () => {
    toast.success("your order has been placed");
    items.forEach(item => {
      if (item.quantity > 0) {
        quantity.push(item.quantity);
        description.push(item.description);
        price.push(item.quantity * item.price);
      }
    });
    const pricelength = price.length;
    if (pricelength > 0) {
      for (var i = 0; i < pricelength; i++) {
        totalprice += price[i];
      }
    }

    console.log("total quantity is", Totalquantity);
    console.log("price is", price);
    console.log("quantity is", quantity);
    const reqdata = {
      price,
      quantity,
      description,
      totalprice,
      Totalquantity,
    };
    dispatch(Cartdata(reqdata));
    dispatch(ClearCart());
    setorder(true);

    //window.location.reload(false)
  };
  useEffect(() => {
    setTimeout(() => {
      if (order) {
        navigate("/Cart");
      }
    }, 2000);
  }, [order, navigate]);
  return (
    <>
      <div className=" flex flex-col bg-white rounded-lg shadow  dark:bg-gray-700">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Your Total Bill
          </h3>
        </div>

        <div className="p-6 space-y-6 text-center">
          <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            <h1 className="text-xl text-black">
              Your total Items in the cart is
            </h1>
            <h1 className="items-center">{Totalquantity}</h1>
            <h1 className="text-xl text-black"> Your Total bill is</h1>
            {items.reduce((prev, current) => {
              return (prev += current.price * current.quantity);
            }, 0)}
          </div>
          <div className="text-base leading-relaxed text-center text-gray-500 dark:text-gray-400">
            {items.map(item => {
              if (item.quantity > 0) {
                return (
                  <div
                    className="flex flex-col justify-center items-center"
                    key={Math.random().toString()}
                  >
                    <div className="flex gap-3 text-center">
                      {item.description}{" "}
                      <h1 className="text-lg text-black">
                        {" "}
                        (x{item.quantity})
                      </h1>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
        {/* <!-- Modal footer --> */}
        {Totalquantity > 0 ? (
          <div className=" text-center mb-5">
            <button
              onClick={placeorder}
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Place your Order
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default CheckoutPage;
