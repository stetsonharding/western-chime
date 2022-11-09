import React from "react";

import CartQuickView from "./CartQuickView";
import GrandTotal from "./GrandTotal";
import RedeemInfo from "./RedeemInfo";
import RedeemInput from "./RedeemInput";

function CheckoutContainer({
  cartItems,
  setCartItems,
  formatPrice,
  grandTotal,
  setGrandTotal,
}) {
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
        <GrandTotal formatPrice={formatPrice} grandTotal={grandTotal} />
        <RedeemInfo />
        <RedeemInput setGrandTotal={setGrandTotal} />
      </CartQuickView>
    </div>
  );
}

export default CheckoutContainer;
