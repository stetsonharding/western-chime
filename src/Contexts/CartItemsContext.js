import React, { useState } from "react";

export const CartItemsContext = React.createContext();

export function CartItemsContextProvider({ children }) {
  //Trying to get cartItems and setCart items to be filled inside the learnMoreMOdal COmponents
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartItemsContext.Provider>
  );
}
