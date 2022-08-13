import React from "react";
import classes from "./Input.module.css";

const Input = () => {
  return (
    <input
      className={classes.input_amount}
      type="number"
      min="1"
      max="5"
    ></input>
  );
};

export default Input;
