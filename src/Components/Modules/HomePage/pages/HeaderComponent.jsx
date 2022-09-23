import React from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Signout, reset } from "Components/Modules/Auth/redux/UserSlice";
import { CircleLoader } from "react-spinners";
import SideApp from "./SideSlider";
const HeaderComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let { user, isSuccess, isError, isSignout, isLoading, message } = useSelector(
    state => state.Auth
  );

  useEffect(() => {
    if (isSignout) {
      toast.success("Sign out Succesfully");
      navigate("/Signin");
    }
    return () => {
      dispatch(reset());
    };
  }, [isError, message, isSuccess, dispatch, isSignout, navigate, user]);
  if (isLoading) {
    <CircleLoader color="#36d7b7" />;
  }
  const BacktoSignin = () => {
    dispatch(Signout());
  };
  return (
    <React.Fragment>
      <header>
        <section className="flex bg-white ">
          <div className="py-5 xl:px-52 xl:py-5 mr-3 px-30 ">
            {location.pathname !== "/Signin" &&
              location.pathname !== "/Signup" && (
                <Link to="/home">
                  <img
                    src="https://www.cheetay.pk/static/images/newLandingPage/logo.svg"
                    alt="imglogo"
                  />
                </Link>
              )}
          </div>
          <div className="ml-auto py-8 xl: xl:py-8 invisible xl:visible">
            <ul className="flex justify-items-end space-x-5 md:space-x-10">
              <li>
                <a href="/home">
                  <img
                    src="https://www.cheetay.pk/static/images/newLandingPage/facebook-header.svg"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="/home">
                  <img
                    src="https://www.cheetay.pk/static/images/newLandingPage/instagram-header.svg"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="/home">
                  <img
                    src="https://www.cheetay.pk/static/images/newLandingPage/twitter-header.svg"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="/home">
                  <img
                    src="https://www.cheetay.pk/static/images/newLandingPage/snapchat-header.svg"
                    alt=""
                  />
                </a>
              </li>

              <li className="mt-[-11px]">
                {location.pathname !== "/Signin" &&
                  location.pathname !== "/Signup" &&
                  location.pathname !== "/Checkout" && (
                    <button
                      type="button"
                      onClick={BacktoSignin}
                      className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-6 py-2.5  text-center mr-2 mb-2"
                    >
                      Sign out
                    </button>
                  )}
              </li>

              <li className="flex flex-col items-center justify-center py-2 visible  ">
                {location.pathname !== "/Signin" &&
                  location.pathname !== "/Signup" && <SideApp />}
              </li>

              <li className="w-[19px] mb-4">
                <Link to="/Signin">
                  <img src="./user.png" alt="" />{" "}
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </header>
    </React.Fragment>
  );
};
export default HeaderComponent;
