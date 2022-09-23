import { Field, ErrorMessage } from "formik";
import React from "react";
import TextError from "./textError";

const Select = props => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="mt-4 flex flex-col">
      <label className="mr-3" htmlFor={name}>
        {label}
      </label>
      <Field
        as="select"
        id={name}
        name={name}
        {...rest}
        className="px-3 py-2 bg-white border shadow-sm border-slate-400 placeholder-slate-400 focus:outline-none focus:border-[#007c89] focus:ring-[#007c89] block w-full rounded-sm sm:text-sm focus:ring-1 mb-2"
      >
        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
export default Select;
