import React from "react";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ModalContent = props => {
  const { items, Totalquantity } = useSelector(state => state.Myitems);

  return (
    <>
      {props.modalStatus && Totalquantity > 0 ? (
        <Modal>
          <div className=" overflow-y-hidden overflow-x-hidden fixed xl:top-[37px] xl:right-0 md:left-0 md:right-0 md:bottom-0 md:top:0  xl:bottom-0 xl:left-[456px]  w-full md:inset-0 h-modal md:h-full">
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
              {/* <!-- Modal content --> */}
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                {/* <!-- Modal header --> */}
                <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Your Total Bill
                  </h3>
                  <button
                    onClick={props.setModalStatus}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="defaultModal"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                {/* <!-- Modal body --> */}
                <div className="p-6 space-y-6">
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
                  <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {items.map(item => {
                      if (item.quantity > 0) {
                        return (
                          <div
                            className="flex flex-col"
                            key={Math.random().toString()}
                          >
                            <div className="flex gap-3">
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
                <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                  <Link to="/Checkout">
                    <button
                      data-modal-toggle="defaultModal"
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Go to Check out
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      ) : null}
    </>
  );
};
export default ModalContent;
