import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ModalContent from "./ModalContent";
import CartImage from "../../../../Assests/304843.svg";
import { useSelector } from "react-redux";
//import { CartContentdata } from "../CartContent";
const CartHeader = () => {
  const [modal, setModal] = useState(false);
  const { Totalquantity } = useSelector(state => state.Myitems);

  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <React.Fragment>
      <header>
        <section className="flex bg-white">
          <div className="py-5 xl:px-52 xl:py-5 w-[100%]">
            <Link to="/home">
              <img
                src="https://www.cheetay.pk/static/images/newLandingPage/logo.svg"
                alt="imglogo"
              />
            </Link>
          </div>
          <div className="ml-auto py-8 xl:py-8">
            <ul className="flex justify-items-end space-x-5 md:space-x-10">
              <li className="invisible xl:visible">
                <a href="/home">
                  <img
                    src="https://www.cheetay.pk/static/images/newLandingPage/facebook-header.svg"
                    alt=""
                  />
                </a>
              </li>
              <li className="invisible xl:visible">
                <a href="/home">
                  <img
                    src="https://www.cheetay.pk/static/images/newLandingPage/instagram-header.svg"
                    alt=""
                  />
                </a>
              </li>
              <li className="invisible xl:visible">
                <a href="/home">
                  <img
                    src="https://www.cheetay.pk/static/images/newLandingPage/twitter-header.svg"
                    alt=""
                  />
                </a>
              </li>
              <li className="invisible xl:visible">
                <a href="/home">
                  <img
                    src="https://www.cheetay.pk/static/images/newLandingPage/snapchat-header.svg"
                    alt=""
                  />
                </a>
              </li>
              <li className="w-[7%] md:w-[3%] mt-[-5px] cursor-pointer">
                <div className="no-underline text-[#d60e96] relative inline-flex cursor-pointer">
                  <img
                    src={CartImage}
                    alt="cartimage"
                    onClick={handleModal}
                  ></img>
                  <span className="text-xs absolute top-[-6px] right-[-5px] w-4 h-4 text-[#fff] bg-[#418deb] rounded-[50%] flex items-center justify-center">
                    {Totalquantity}
                  </span>
                </div>
              </li>
              <li className="mt-[-1rem] ml-[10%]">
                <Link to="/Cart">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Back to cart
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </header>
      <ModalContent modalStatus={modal} setModalStatus={handleModal} />
    </React.Fragment>
  );
};
export default CartHeader;
