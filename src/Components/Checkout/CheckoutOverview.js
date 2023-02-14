import React from "react";

import CartQuickView from "../CartQuickView";
import GrandTotal from "../GrandTotal";
import RedeemInfo from "../RedeemInfo";
import RedeemInput from "../RedeemInput";
import CheckoutForm from "./CheckoutForm";

import "../../css/CheckoutOverview.css";

function CheckoutOverview({
  //cartItems,
  //setCartItems,
  formatPrice,
  grandTotal,
  setGrandTotal,
  userInfo,
  setUserInfo,
}) {
  return (
    <div className="checkout-container">
      <CheckoutForm
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        //setCartItems={setCartItems}
      />
      <CartQuickView
        //cartItems={cartItems}
        //setCartItems={setCartItems}
        title="Cart Overview "
        color="#7b3018"
        headingColor="white"
      >
        {grandTotal !== 0 && (
          <>
            <GrandTotal
              formatPrice={formatPrice}
              grandTotal={grandTotal}
              headingColor="white"
              totalColor="white"
            />
            <RedeemInfo />
            <RedeemInput
              setGrandTotal={setGrandTotal}
              grandTotal={grandTotal}
            />
          </>
        )}
      </CartQuickView>
    </div>
  );
}

export default CheckoutOverview;
