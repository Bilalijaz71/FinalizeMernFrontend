import React from "react";
const Layout =
  Component =>
  ({ ...props }) => {
    return (
      <React.Fragment>
        <Component {...props} />
      </React.Fragment>
    );
  };
export default Layout;
