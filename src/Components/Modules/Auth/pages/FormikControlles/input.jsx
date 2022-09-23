import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./textError";
const Input = props => {
  const { label, name, ...rest } = props;
  return (
    <div className="field">
      <label
        className="font-medium pb-3 block text-[#241c15 ] max-w-2xl"
        htmlFor={name}
      >
        {label}
      </label>
      <Field
        className="px-3 py-2 bg-white border shadow-sm border-slate-400 placeholder-slate-400 focus:outline-none focus:border-[#007c89] focus:ring-[#007c89] block w-full rounded-sm sm:text-sm focus:ring-1 mb-2"
        id={name}
        name={name}
        {...rest}
      ></Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
export default Input;
