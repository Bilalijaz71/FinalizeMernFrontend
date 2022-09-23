import React from "react";
import Checkbox from "./Checkbox";
import Select from "./Select";
import SignUpinput from "./SignupInput";
const Signupcontroles = props => {
  const { controles, ...rest } = props;
  switch (controles) {
    case "input":
      return <SignUpinput {...rest} />;
    case "select":
      return <Select {...rest}></Select>;
    case "checkbox":
      return <Checkbox {...rest} />;
    default:
      return null;
  }
};
export default Signupcontroles;
