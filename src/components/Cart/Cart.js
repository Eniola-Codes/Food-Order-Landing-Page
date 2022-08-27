import React, { useContext } from "react";
import CartItem from "./CartItem";
import Modal from "../Ui/Modal";
import TheButton from "../Ui/TheButton";
import classes from "./Cart.module.css";
import CartContext from "../store/cartcontext";

const Cart = (props) => {
  // Using useContext hooks
  const cartCtx = useContext(CartContext);
  // ENDS

  //Converting Total amount to two decimal places

  const totalAmount = `₦${cartCtx.totalAmount.toFixed(2)}`;

  //ENDS

  //Checking if there is any cart item in the cart

  const hasItems = cartCtx.items.length > 0;

  //ENDS

  //Function is called when items are being added or removed from the cart

  const onAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const onRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  //ENDS

  //Revceiving values via props and mapping it using useContext

  var cartItems = cartCtx.items.map((item) => (
    <CartItem
      name={item.name}
      amount={item.amount}
      price={item.price}
      key={item.id}
      src={item.src}
      onAdd={onAddHandler.bind(null, item)}
      onRemove={onRemoveHandler.bind(null, item.id)}
    />
  ));

  //ENDS

  // Rendering the Cart using the modal component

  return (
    <Modal onCloseCart={props.onCloseCart}>
      <div className={classes.items}>
        <div className={classes.item_group}>{cartItems}</div>

        <div className={`${classes.amount} `}>
          <p>Total Amount</p>
          <p>{totalAmount}</p>
        </div>
        <div className={classes.buttons}>
          <TheButton
            onClick={props.onCloseCart}
            className={` ${classes.btn_style} me-2`}
          >
            Close
          </TheButton>
          {/* Hiding the order button if there is no item in the cart using the hasitems variable as a condition */}
          {hasItems && (
            <TheButton className={classes.btn_style2} onClick={props.onOrder}>
              Order
            </TheButton>
          )}
          {/* ENDS */}
        </div>
      </div>
    </Modal>
  );
};

// ENDS

export default Cart;
