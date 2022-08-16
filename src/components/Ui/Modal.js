import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div>
  <div className={classes.backdrop} onClick={props.OnCloseCart}></div>
  </div>;
};

const ModalOverLay = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const modalElements = document.getElementById("modal-overlay");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onCloseCart={props.OnCloseCart}/> , modalElements)}

      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        modalElements
      )}
    </>
  );
};

export default Modal;

