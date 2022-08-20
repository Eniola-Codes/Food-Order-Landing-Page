import React, { useContext, useEffect, useState } from "react";
import classes from "./NavCartButton.module.css";
import CartContext from "../store/cartcontext";

const NavCartButton = (props) => {
  //Using useContext & useState hooks
  const cartCtx = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  //ENDS

  //Extracting the items variable from the context values mainly to be used as a useEffect dependency
  const { items } = cartCtx;
  //ENDS

  //Automating the numbering of items on the Cart button using the reduce function
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  //ENDS

  //Adding conditional stying to the Cart button using useState and ternary operator
  const btnBump = `${classes.cart__button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;
  //ENDS

  // Using the Effect hook to control the animation of the Cart button on adding items
  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtnIsHighlighted(true);

    const bumpTimer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(bumpTimer);
    };
  }, [items]);
  // ENDS

  //Rendering the Cart button on the DOM
  return (
    <div onClick={props.onClick} className={btnBump}>
      <i className="bi bi-cart"></i>
      Cart
      <div className={classes.badge}>{numberOfCartItems}</div>
    </div>
  );
  //ENDS
};

export default NavCartButton;
