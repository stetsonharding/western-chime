import React, { useState } from "react";

export const GrandTotalContext = React.createContext();

export function GrandTotalContextProvider({ children }) {
  //Trying to get cartItems and setCart items to be filled inside the learnMoreMOdal COmponents
  const [grandTotal, setGrandTotal] = useState([]);

  function formatPrice(price) {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  return (
    <GrandTotalContext.Provider
      value={{ grandTotal, setGrandTotal, formatPrice }}
    >
      {children}
    </GrandTotalContext.Provider>
  );
}
