import React from "react";

import { CartQuickView } from "./ShoppingCartBadge";
import RedeemOrder from "./RedeemOrder";

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
        <RedeemOrder />
      </CartQuickView>
    </div>
  );
}

export default CheckoutContainer;
