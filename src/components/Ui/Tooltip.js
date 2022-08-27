import React from "react";
import classes from "./Tooltip.module.css";

const Tooltip = (props) => {
  //Structure and Layout of the Tooltip component
  return (
    <div className={`${classes.tooltip} ${props.className}`}>
      <span className={classes.tootip_content}>Dish(es) added to cart</span>
    </div>
  );
  //END
};

export default Tooltip;
