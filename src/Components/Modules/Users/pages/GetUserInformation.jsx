import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { reset, UpdateUser } from "Components/Modules/Auth/redux/UserSlice";
import Formikcontroles from "Components/Modules/Auth/pages/FormikControlles/formikcontroles";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { DeleteUser } from "Components/Modules/Auth/redux/UserSlice";
import { useEffect } from "react";
const GetUserInformation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userinfo, user, message, isError, updated, isUpdatedata } =
    useSelector(state => state.Auth);
  //States
  const [openusername, setopenusername] = useState(false);
  const [openemail, setemail] = useState(false);
  const [openpassword, setpassword] = useState(false);
  const showusername = () => {
    setopenusername(!openusername);
  };
  const showemail = () => {
    setemail(!openemail);
  };
  const showpassword = () => {
    setpassword(!openpassword);
  };
  useEffect(() => {
    if (!user) {
      navigate("/Signin");
    }
    if (isError) {
      toast.error(message);
    }
    if (updated) {
      toast.success(isUpdatedata);
      navigate("/home");
    }
    return () => {
      reset();
    };
  }, [user, dispatch, message, isError, navigate, updated, isUpdatedata]);
  const deleteuser = () => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to delete your account.",
      buttons: [
        {
          label: "Yes",
          onClick: () => dispatch(DeleteUser()),
        },
        {
          label: "No",
        },
      ],
    });
  };
  let initialValues = {
    password: "",
    email: "",
    username: "",
  };

  const ValidationSchema = Yup.object({
    password: Yup.string().min(
      8,
      "Password is too short - should be 8 chars or numbers minimum."
    ),
    email: Yup.string().email("Invalid email"),
    username: Yup.string().min(3, "User Name is too short "),
  });
  const onSubmit = values => {
    let { username, email, password } = values;
    const reqdata = {
      username,
      email,
      password,
    };
    dispatch(UpdateUser(reqdata));
  };
  return (
    <>
      <div className=" user-edit xl:ml-[35%] mb-5 xl:mr-[50%] p-4 w-full max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Personal information
          </h5>
          <button
            type="submit"
            onClick={deleteuser}
            className="bg-gradient-to-br from-pink-500 to-orange-400  hover:bg-gradient-to-bl text-white font-bold py-2 px-4 border-b-4 ring-pink-800 hover:ring-pink-200 rounded"
          >
            Delete User
          </button>
        </div>
        <div className="flow-root">
          <Formik
            initialValues={initialValues}
            validationSchema={ValidationSchema}
            onSubmit={onSubmit}
          >
            {formik => (
              <Form className="ms-4 mt-5 space-y-7 mb-[1rem] pb-[1rem]">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      {!openusername && (
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Name
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {userinfo.username}
                          </p>
                        </div>
                      )}
                      <div className="inline-flex flex-col gap-y-3 items-center text-base font-semibold text-gray-900 dark:text-white">
                        {!openusername && (
                          <button
                            onClick={showusername}
                            className="bg-gradient-to-br from-pink-500 to-orange-400  hover:bg-gradient-to-bl text-white font-bold py-2 px-4 border-b-4 ring-pink-800 hover:ring-pink-200 rounded"
                          >
                            Edit Name
                          </button>
                        )}
                        {openusername && (
                          <>
                            <Formikcontroles
                              controles="input"
                              name="username"
                              label="username"
                              type="text"
                            />

                            <button
                              type="submit"
                              disabled={!(formik.isValid && formik.dirty)}
                              className="bg-gradient-to-br from-pink-500 to-orange-400  hover:bg-gradient-to-bl text-white font-bold py-2 px-4 border-b-4 ring-pink-800 hover:ring-pink-200 rounded"
                            >
                              Save
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      {!openemail && (
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Email
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {userinfo.email}
                          </p>
                        </div>
                      )}
                      <div className="inline-flex flex-col gap-y-3 items-center text-base font-semibold text-gray-900 dark:text-white">
                        {!openemail && (
                          <button
                            onClick={showemail}
                            className="bg-gradient-to-br from-pink-500 to-orange-400  hover:bg-gradient-to-bl text-white font-bold py-2 px-4 border-b-4 ring-pink-800 hover:ring-pink-200 rounded"
                          >
                            Edit Email
                          </button>
                        )}
                        {openemail && (
                          <>
                            <Formikcontroles
                              controles="input"
                              name="email"
                              label="Email"
                              type="text"
                            />
                            <button
                              type="submit"
                              disabled={!(formik.isValid && formik.dirty)}
                              className="bg-gradient-to-br from-pink-500 to-orange-400  hover:bg-gradient-to-bl text-white font-bold py-2 px-4 border-b-4 ring-pink-800 hover:ring-pink-200 rounded"
                            >
                              Save
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      {!openpassword && (
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Password
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            *****
                          </p>
                        </div>
                      )}
                      <div className="inline-flex flex-col gap-y-3 items-center text-base font-semibold text-gray-900 dark:text-white">
                        {!openpassword && (
                          <button
                            onClick={showpassword}
                            className="bg-gradient-to-br from-pink-500 to-orange-400  hover:bg-gradient-to-bl text-white font-bold py-2 px-4 border-b-4 ring-pink-800 hover:ring-pink-200 rounded"
                          >
                            Edit Password
                          </button>
                        )}
                        {openpassword && (
                          <>
                            <Formikcontroles
                              controles="input"
                              name="password"
                              label="Password"
                              type="text"
                            />
                            <button
                              type="submit"
                              disabled={!(formik.isValid && formik.dirty)}
                              className="bg-gradient-to-br from-pink-500 to-orange-400  hover:bg-gradient-to-bl text-white font-bold py-2 px-4 border-b-4 ring-pink-800 hover:ring-pink-200 rounded"
                            >
                              Save
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </li>
                </ul>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
export default GetUserInformation;
