import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./textError";
const Checkbox = props => {
  const { name, type, ...rest } = props;
  return (
    <div className="d-flex flex-column align-items-center">
      <Field type="checkbox" id={name} name={name} {...rest}></Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
export default Checkbox;
