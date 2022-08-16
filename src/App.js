import React,{ useState } from 'react';
import './App.css';
import TheNav from './components/Header/TheNav';
import Sections from './components/Sections/Sections';
import Cart from './components/Cart/Cart';
import CartProvider from './components/store/CartProvider';

const App = () => {
const [cartIsShown,setCartIsShown] = useState(false);

  const onShowCartHandler = () =>
  {
    setCartIsShown(true);
  }

  const onCloseCartHandler = () =>
  {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
    {cartIsShown && <Cart onCloseCart={onCloseCartHandler}/>}
      <TheNav onShowCart={onShowCartHandler}/>
      <Sections/>
    </CartProvider>
  );
}

export default App;
