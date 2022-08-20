import React, { useReducer } from "react";
import CartContext from "./cartcontext";

//Created a default state for the cart to be used in the reducer function and the reducer hook defalt state;
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
//END

//The Reducer function loic
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    //Finding the accurate Total Amount
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    //END

    //Checking if an item already exists in the Cart, if yes findng it's index , if no , giving it a value of null
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    //END

    //Assigning the existing item variable to the existing variale in the cart, if there is no existing variabe, it's vaue will be null or false like said above
    const existingItem = state.items[existingItemIndex];
    //END
    let updatedItems;

    //Checking If is is true or false that the item already exists in the cart
    if (existingItem) {
      //assigns  the exsiting item and adds the amount inputted to the amount of the existing item to the updatedItem variale
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      //END

      //Get all the items in the cart and assigns the updatedItem varibale to the Existing item
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
      //END
    } else {
      //Adding the item into the cart if it doesn't exist before before
      updatedItems = state.items.concat(action.item);
      //END
    }
    return {
      //Returning the items data and totalAmount
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      //END
    };
  }
  //END

  if (action.type === "REMOVE") {
    //Checking if an item already exists in the Cart, if yes findng it's index , if no , giving it a value of null
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    //END

    //Assigning the existing item variable to the existingItem variable
    const existingItem = state.items[existingItemIndex];
    //END

    //Finding the accurate Total Amount
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    //END
    let updatedItems;

    //Checking if the amount is equals to 1
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    }
    //END
    else {
      //Get all the items in the cart, decrements the item amount and assigns them to the updatedItem
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      //END

      //Get all the items in the cart and assigns the updatedItem varibale to the Existing item
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
      //END
    }
    return {
      //Returning the items data and totalAmount
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      //END
    };
  }
  //Returns the default cart state if no condition is met
  return defaultCartState;
  //END
};

const CartProvider = (props) => {
  //Using the useReducr hook
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  //END

  //dispatching the cart ADD action
  const addItemHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };

  //dispatching the cart REMOVE action
  const removeItemHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      id: id,
    });
  };

  //Defining and Automating the cartContext Functions
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  //Rendering every content being rendered by the use CartContext, using the .Provider to let the context be able to manage other parts of the application
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
