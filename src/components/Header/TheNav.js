import React from "react";
import TheNavbar from "./TheNavbar";

const TheNav = (props) => {
  return (
    <header>
      <TheNavbar onShowCart={props.onShowCart} />
    </header>
  );
};

export default TheNav;
