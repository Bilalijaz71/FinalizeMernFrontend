import { useState } from "react";
import { useDispatch } from "react-redux";
import { GetMe } from "Components/Modules/Auth/redux/UserSlice";
import { useNavigate } from "react-router-dom";
import { BsCardChecklist } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { Cartdataget } from "Components/Modules/Cart/redux/CartSlice";
import DarkMode from "Components/Modules/DarkMode/DarkMode.tsx";
import { Signout } from "Components/Modules/Auth/redux/UserSlice";
const SideApp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  const GetUserData = () => {
    dispatch(GetMe());
    setTimeout(() => {
      navigate("/Myinfo");
    }, 1000);
  };
  const Getpreviousorders = () => {
    dispatch(Cartdataget());
    setTimeout(() => {
      navigate("/Orders");
    }, 1000);
  };
  const BacktoSignin = () => {
    dispatch(Signout());
  };
  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-3xl  text-black items-center cursor-pointer fixed right-10 top-6 z-50 "
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer md:right-5 right-[0.5rem] top-6 "
          fill="#FF5733"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`top-0 right-0 w-[60vw]
        xl:w-[15vw] sm:w-[35vw]  bg-transparent p-10 pl-20 text-white border ring-white fixed h-full z-40 ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className="my-8">
          <img
            src="https://www.cheetay.pk/static/images/newLandingPage/logo.svg"
            alt="imglogo"
          />
        </div>
        <h3 className=" mt-20 text-4xl font-semibold text-black">
          <div className="inline-flex  ml-[-4rem] gap-[1rem] mb-[2rem]">
            <FaUserCircle className="m-auto" />
            <button
              type="submit"
              onClick={GetUserData}
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              User Information
            </button>
          </div>

          <div className="inline-flex ml-[-4rem] gap-[1rem]">
            <BsCardChecklist className="m-auto" />
            <button
              type="submit"
              onClick={Getpreviousorders}
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Previous Orders
            </button>
          </div>
          <div className=" visible sm:invisible mt-[20px]">
            <button
              type="button"
              onClick={BacktoSignin}
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-6 py-2.5  text-center mr-2 mb-2"
            >
              Sign out
            </button>
          </div>
          <div className="ml-[-4rem] gap-[1rem] mt-3">
            <DarkMode />
          </div>
        </h3>
      </div>
    </>
  );
};

export default SideApp;
