import React from "react";
import ReactDOM from "react-dom";
const ModalOverlay = props => {
  return (
    <div className="">
      <div className="">{props.children}</div>
    </div>
  );
};
const Modal = props => {
  const PortalElement = document.getElementById("overlays");
  return ReactDOM.createPortal(
    <ModalOverlay>{props.children}</ModalOverlay>,
    PortalElement
  );
};
export default Modal;
