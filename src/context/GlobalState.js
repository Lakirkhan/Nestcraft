import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  cart: [],
  orders: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addItemToCartList = (item) => {
    dispatch({
      type: "ADD_ITEM_IN_CART",
      payload: { ...item, quantity: 1 },
    });
  };

  const removeItemFromCartList = (item) => {
    dispatch({
      type: "REMOVE_ITEM_IN_CART",
      payload: item,
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const addItemToOrderList = (item) => {
    dispatch({
      type: "ADD_ITEM_IN_ORDER",
      payload: item,
    });
  };

  const removeItemFromOrderList = (item) => {
    dispatch({
      type: "REMOVE_ITEM_IN_ORDER",
      payload: item,
    });
  };

  function increaseQuantity(id) {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: id,
    });
  }

  function decreaseQuantity(id) {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        cart: state.cart,
        orders: state.orders,
        addItemToCartList,
        removeItemFromCartList,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        addItemToOrderList,
        removeItemFromOrderList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
