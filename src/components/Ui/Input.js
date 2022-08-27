import React from "react";
import classes from "./Input.module.css";

//Using the forward ref so you can use the useRef to extract value from the input in other components
const Input = React.forwardRef((props, ref) => {
  //Layout and structure of the input component.
  return (
    <input
      className={`${classes.input_amount} ${props.className}`}
      placeholder={props.placeholder}
      ref={ref}
      {...props.input}
    ></input>
  );
  //END
});
//END
export default Input;
