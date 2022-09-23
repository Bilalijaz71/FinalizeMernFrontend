import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CircleLoader } from "react-spinners";
import React, { useEffect } from "react";
import * as Yup from "yup";
import Signupcontroles from "./SignUpControlls";
import { register, reset } from "../../redux/UserSlice";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isSuccess, message, isError, isLoading } = useSelector(
    state => state.Auth
  );
  const initialValues = {
    username: "",
    email: "",
    password: "",
    select: "",
    checkbox: "",
  };
  const ValidationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is Required"),
    password: Yup.string().required("Password is Required"),
    select: Yup.string().required("Select Any country"),
    username: Yup.string().required("User Name is Required"),
    checkbox: Yup.string().required("CheckBox is Required"),
  });
  const countries = [
    {
      key: "Select an option",
      value: "",
    },
    {
      key: "Pakistan",
      value: "pakistan",
    },
    {
      key: "Australia",
      value: "australia",
    },
    {
      key: "America",
      value: "america",
    },
  ];

  useEffect(() => {
    if (isSuccess) {
      toast.success("Your Account Created Successfully");
      navigate("/Signin");
    }
    if (isError) {
      toast.error(message);
    }
    return () => {
      dispatch(reset());
    };
  }, [isError, isSuccess, navigate, message, user, dispatch]);
  const onSubmit = values => {
    const { username, email, password } = values;
    const registerinfo = {
      username,
      email,
      password,
    };
    dispatch(register(registerinfo));
  };
  if (isLoading) {
    <CircleLoader color="#36d7b7" />;
  }
  return (
    <section className="flex mb-[12px]">
      <div className="px-4 w-[60%] flex justify-center m-auto">
        <Formik
          initialValues={initialValues}
          validationSchema={ValidationSchema}
          onSubmit={onSubmit}
        >
          {formik => (
            <Form>
              <h1 className="font-meansweb text-3xl text-[#241c15]">
                Sign up for Cheetay
              </h1>
              <h3 className="font-[inherit] text-base text-[#241c15]">
                Create a free account or ?
                <Link
                  to="/Signin"
                  className="font-[inherit] text-base text-[#371B46] underline ml-2"
                >
                  log in
                </Link>
              </h3>
              <Signupcontroles
                controles="input"
                type="email"
                label="Email"
                name="email"
              />
              <Signupcontroles
                controles="input"
                name="username"
                label="Username"
                type="text"
              />

              <Signupcontroles
                controles="input"
                name="password"
                label="password"
                type="password"
              />
              <Signupcontroles
                controles="select"
                name="select"
                label="Select country"
                options={countries}
              />
              <div className="flex mt-2 gap-3 justify-start">
                <Signupcontroles
                  controles="checkbox"
                  type="checkbox"
                  name="checkbox"
                />
                <label className="font-normal text-[15px] leading-6 mt-[-5px] text-[#241c15] font-garikweb ">
                  I don't want to receive emails about Mailchimp and related
                  Intuit product and
                  <br />
                  feature updates, marketing best practices, and promotions from
                  Mailchimp.
                </label>
              </div>
              <p className="font-garikweb font-normal mt-5">
                By creating an account, you agree to our Terms and have read and
                acknowledge the
                <br />
                Global Privacy Statement
              </p>

              <button
                className=" bg-[#007c89] my-5  hover:bg-blue-700 text-white font-bold py-2 px-6 cursor-pointer border border-blue-700 rounded"
                type="submit"
                disabled={!formik.isValid}
              >
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="w-[26%] ml-auto h-auto mb-[-11px] mt-[-80px] bg-gradient-to-l from-[#ffe012] to-transparent overflow-hidden">
        <div className="ml-auto h-[100%] w-[100%] bg-cover mt-12 bg-[url('https://login.mailchimp.com/release/1.1.1e7f22261d02ef29f0947088eea7836dd2f85ad03/images/brand_assets/illos/art-hero-flowers.png')] invisible lg:visible"></div>
      </div>
    </section>
  );
};
export default Signup;
