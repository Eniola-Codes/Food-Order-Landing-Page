import React from "react";
import classes from "./Input.module.css";


const Input = () => {
  return (
    <input
      className={classes.input_amount}
      type="number"
      min="1"
      max="5"
      step="1"
      defaultValue="1"
    ></input>
  );
};

export default Input;
