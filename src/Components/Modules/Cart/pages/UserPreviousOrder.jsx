import React from "react";

const UserPreviousOrder = ({
  Totalquantity,
  description,
  quantity,
  totalprice,
}) => {
  // const description_length = description.length;
  return (
    <>
      <div>
        <div className="w-80 h-auto mt-24 m-auto lg:mt-16 max-w-sm mb-3">
          <img
            src="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg"
            alt=""
            className="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover"
          />
          <div className="bg-white shadow-2xl pb-4 rounded-b-3xl">
            <h2 className="text-center text-gray-800 text-2xl font-bold pt-6">
              Order Summary
            </h2>
            <div className="w-11/12 h-auto m-auto">
              <p className="text-center text-gray-500 pt-5">
                {description.map((currentdata, index) => {
                  return (
                    <p>
                      {currentdata}
                      {`(${quantity[index]})`}
                    </p>
                  );
                })}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-72 lg:w-5/6 m-auto bg-indigo-50 mt-5 p-4 lg:p-4 rounded-2xl">
              <div className=" pt-1">
                <p className="text-gray-800 font-bold lg:text-sm">
                  Total Price
                </p>
                <p className="text-gray-500 text-sm">{totalprice}</p>
              </div>
              <div className=" pt-1 flex flex-col items-center">
                <p className="text-gray-800 font-bold m-0 lg:text-sm">
                  Total Quantity
                </p>
                <p className="text-gray-500 text-sm">{Totalquantity}</p>
              </div>
            </div>
            <div className="bg-blue-700 w-72 lg:w-5/6 m-auto mt-6 mb-5 p-2 hover:bg-indigo-500 rounded-2xl  text-white text-center shadow-xl shadow-bg-blue-700">
              <button classNames="lg:text-sm text-lg font-bold">
                Order Delivered
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserPreviousOrder;
