import React from "react";
import { useSelector } from "react-redux";
import UserPreviousOrder from "./UserPreviousOrder";

const GetPreviousOrders = () => {
  const MyOrders = useSelector(state => state.Myitems.PreviousOrders);
  let myorderlen = MyOrders?.length || 0;

  if (myorderlen === 0) {
    return (
      <div className="flex items-center justify-center  text-3xl mb-4">
        You Haven't Place any Order Yet
      </div>
    );
  } else {
    return MyOrders.map(Currentdata => {
      return <UserPreviousOrder key={Currentdata._id} {...Currentdata} />;
    });
  }
};
export default GetPreviousOrders;
