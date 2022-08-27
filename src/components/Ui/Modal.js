import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

//Using react portal to create a backdrop to avoid excessive div tags when react app is being rendered

const Backdrop = (props) => {
  //Rendered the backdrop component
  return (
    <div>
      <div className={classes.backdrop} onClick={props.OnCloseCart}></div>
    </div>
  );
  //END
};

const ModalOverLay = (props) => {
  //Rendered the modal component
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
  //END
};

const modalElements = document.getElementById("modal-overlay");

const Modal = (props) => {
  //Rendered the components above
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCloseCart={props.OnCloseCart} />,
        modalElements
      )}

      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        modalElements
      )}
    </>
  );
};
//END

//END

export default Modal;
