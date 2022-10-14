import React from "react";

import "../css/QuickCartButton.css";

function QuickCartButton() {
  return (
    <div className="quickcart-btns-container">
      <button className="quickcart-btn" id="checkout">
        Checkout
      </button>
      <button className="quickcart-btn close">Close</button>
    </div>
  );
}

export default QuickCartButton;
