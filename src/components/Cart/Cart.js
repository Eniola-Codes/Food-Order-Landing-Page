import React from "react";
import Modal from "../Ui/Modal";
import TheButton from "../Ui/TheButton";
import classes from "./Cart.module.css";

const Cart = () => {
  const onCloseCartHandler = () => {};

  const onOrderHandler = () => {};

  return (
    <Modal>
      <div className={classes.item}>
        <div className={`${classes.amount} mb-2`}>
          <p>Total Amount</p>
          <p>₦0.00</p>
        </div>
        <div className={classes.buttons}>
          <TheButton
            onclick={onCloseCartHandler}
            className={` ${classes.btn_style} me-2`}
          >
            Close
          </TheButton>
          <TheButton onclick={onOrderHandler} className={classes.btn_style2}>
            Order
          </TheButton>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
