import { Formik, Form } from "formik";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import BG from "../../../../../Assests/bg.jpg";
import { CircleLoader } from "react-spinners";
import { login, reset } from "../../redux/UserSlice";
import { Products } from "Components/Modules/Cart/redux/CartSlice";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import Formikcontroles from "./formikcontroles";
const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isSuccess, isLoading, isError, message } = useSelector(
    state => state.Auth
  );

  const initialValues = {
    password: "",
    email: "",
    checkbox: "",
  };

  const ValidationSchema = Yup.object({
    password: Yup.string().required("Password is Required"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
    // checkbox: Yup.string().required("Required"),
  });

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      toast.success("Welcome to your account");
      navigate("/home");
    }
    return () => {
      dispatch(reset());
    };
  }, [isSuccess, dispatch, isError, navigate, user, message]);

  const onSubmit = values => {
    const { email, password } = values;
    const signinformation = {
      email,
      password,
    };
    dispatch(login(signinformation));
    dispatch(Products());
  };
  if (isLoading) {
    <CircleLoader color="#36d7b7" />;
  }
  return (
    <React.Fragment>
      <section className="flex ml-auto justify-center">
        <div className="px-20 xl:w-[50%]">
          <Formik
            initialValues={initialValues}
            validationSchema={ValidationSchema}
            onSubmit={onSubmit}
          >
            {formik => (
              <Form className="ms-4 mt-5 space-y-7 mb-[1rem] pb-[1rem]">
                <h1 className="font-meansweb text-5xl text-[#241c15]">
                  Log in
                </h1>
                <h3 className="font-[inherit] text-base text-[#241c15]">
                  Need a Cheetay account?
                  <Link to="/Signup" className="ml-2 underline text-[#371B46]">
                    Create an account
                  </Link>
                </h3>

                <Formikcontroles
                  controles="input"
                  name="email"
                  label="Email"
                  type="text"
                />

                <Formikcontroles
                  controles="input"
                  name="password"
                  label="Password"
                  type="password"
                />

                <button
                  className=" mt-4 mb-1 xl:w-full py-3 text-white bg-[#007c89] w-[50%]"
                  type="submit"
                  disabled={!formik.isValid}
                >
                  Sign in
                </button>

                <div className="mb-3 d-flex flex-column align-items-center">
                  <div className="flex justify-center space-x-4 mb-3">
                    <Formikcontroles
                      controles="checkbox"
                      type="checkbox"
                      name="checkbox"
                    />
                    <label className="font-medium text-black">
                      Keep me logged in
                    </label>
                  </div>
                  <div className="flex justify-center space-x-4 underline text-[#007c89]">
                    <Link to="/" className="me-3">
                      Forgot username?
                    </Link>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="lg:mt-[-80px] lg:w-[66%] w-[10%] xl:w-[100%]  xl:mt-[-100px] lg:ml-auto invisible lg:visible mt-[-16px] h-max">
          <img alt="billboard" className=" object-fill" src={BG} />
        </div>
      </section>
    </React.Fragment>
  );
};
export default Signin;
