import React from "react";

import "../css/QuickCartButton.css";

function QuickCartButton({ setIsCartQuickviewShown, cartItems }) {
  return (
    <div className="quickcart-btns-container">
      <button
        className={cartItems.length > 0 ? "quickcart-btn" : "checkout-disabled"}
        disabled={cartItems.length === 0 ? true : false}
      >
        Checkout
      </button>
      <button
        onClick={() => setIsCartQuickviewShown(false)}
        className="quickcart-btn"
        id="close"
      >
        Close
      </button>
    </div>
  );
}

export default QuickCartButton;
