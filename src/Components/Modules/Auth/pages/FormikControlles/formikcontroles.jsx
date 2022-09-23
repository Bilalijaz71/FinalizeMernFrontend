import React from "react";
import Checkbox from "./Checkbox";
import Input from "./input";

const Formikcontroles = props => {
  const { controles, ...rest } = props;
  switch (controles) {
    case "input":
      return <Input {...rest}></Input>;
    case "checkbox":
      return <Checkbox {...rest} />;
    default:
      return null;
  }
};
export default Formikcontroles;
