import React from "react";
import classes from "./TheButton.module.css";

const TheButton = (props) => {
  //Layout and structure of the TheButton component
  return (
    <button
      className={`${classes.button} ${props.className}`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
  //END
};

export default TheButton;
