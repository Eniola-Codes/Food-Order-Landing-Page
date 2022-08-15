import React from "react";
import classes from "./NavCartButton.module.css";

const NavCartButton = (props) => {
  return (
    <div onClick={props.onClick} className={classes.cart__button}>
      <i className="bi bi-cart"></i>
      Cart
      <div className={classes.badge}>0</div>
    </div>
  );
};

export default NavCartButton;
