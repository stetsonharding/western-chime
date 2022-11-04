import React from "react";

import { CartQuickView } from "./ShoppingCartBadge";

function CheckoutContainer({ cartItems, setCartItems }) {
  return (
    <div
      className="card-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CartQuickView
        cartItems={cartItems}
        setCartItems={setCartItems}
      ></CartQuickView>
    </div>
  );
}

export default CheckoutContainer;
