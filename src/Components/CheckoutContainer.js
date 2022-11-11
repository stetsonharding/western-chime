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
      <CartQuickView
        cartItems={cartItems}
        setCartItems={setCartItems}
        title="Cart Overview "
        color="#e3bb67"
        headingColor="#7b3018;"
      >
        <GrandTotal
          formatPrice={formatPrice}
          grandTotal={grandTotal}
          headingColor="#7b3018;"
          totalColor="#7b3018"
        />
        <RedeemInfo />
        <RedeemInput setGrandTotal={setGrandTotal} />
      </CartQuickView>
    </div>
  );
}

export default CheckoutContainer;
