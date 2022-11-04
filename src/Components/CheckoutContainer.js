import React from "react";

import { CartQuickView } from "./ShoppingCartBadge";
import RedeemInfo from "./RedeemInfo";
import RedeemInput from "./RedeemInput";

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
      <CartQuickView cartItems={cartItems} setCartItems={setCartItems}>
        <RedeemInfo />
        <RedeemInput />
      </CartQuickView>
    </div>
  );
}

export default CheckoutContainer;
