import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItems: (item) => {},
  removeItems: (id) => {},
});

export default CartContext;
