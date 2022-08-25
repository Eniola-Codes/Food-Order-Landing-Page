import React, { useState } from "react";
import "./App.css";
import TheNav from "./components/Header/TheNav";
import Sections from "./components/Sections/Sections";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";
import TheFooter from "./components/Footer/TheFooter";

const App = () => {
  //Using useState hook
  const [cartIsShown, setCartIsShown] = useState(false);
  //END

  //Managing the state of the cart component using useState
  const onShowCartHandler = () => {
    setCartIsShown(true);
  };

  const onCloseCartHandler = () => {
    setCartIsShown(false);
  };
//END

//Rendering the cart and all the sections
  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={onCloseCartHandler} />}
      <TheNav onShowCart={onShowCartHandler} />
      <Sections />
      <TheFooter/>
    </CartProvider>
  );
  //END
};

export default App;
