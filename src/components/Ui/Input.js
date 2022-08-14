import React from "react";
import classes from "./Input.module.css";


const Input = React.forwardRef((props, ref) => {



  return (
    <input
      className={classes.input_amount}
      ref={ref}
      {...props.input}
    ></input>
  );
});

export default Input;
