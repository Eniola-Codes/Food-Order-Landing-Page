import React, { useContext } from "react";
import CartItem from "./CartItem";
import Modal from "../Ui/Modal";
import TheButton from "../Ui/TheButton";
import classes from "./Cart.module.css";
import CartContext from "../store/cartcontext";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `₦${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  // const onAddHandler = (item) => {
  //   cartCtx.addItem({ ...item, amount: 1 });
  // };

  // const onRemoveHandler = (id) => {
  //   cartCtx.removeItem(id);
  // };

  // cartCtx.items.map((item) => (
  //   <CartItem
  //     name={item.name}
  //     amount={item.amount}
  //     price={item.price}
  //     key={item.id}
  //     onAdd={onAddHandler.bind(null,item)}
  //     onRemove={onRemoveHandler.bind(null, item.id)}
  //   />
  // ));

  return (
    <Modal onCloseCart={props.onCloseCart}>
      <div className={classes.items}>
        <div className={classes.item_group}>
          {/* <CartItem /> */}
        </div>

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
          {hasItems && (
            <TheButton className={classes.btn_style2}>Order</TheButton>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
