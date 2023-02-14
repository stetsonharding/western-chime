import React, { useContext } from "react";

import { CartItemsContext } from "../Contexts/CartItemsContext";

import "../css/QuickCartButton.css";
import { Link } from "react-router-dom";

function QuickCartButton({ setIsCartQuickviewShown }) {
  const { cartItems } = useContext(CartItemsContext);

  return (
    <div className="quickcart-btns-container">
      {cartItems.length >= 1 && (
        <Link
          to="/Checkout"
          style={{ textDecoration: "none", color: "white" }}
          onClick={() => setIsCartQuickviewShown(false)}
        >
          <button
            className={
              cartItems.length > 0 ? "quickcart-btn" : "checkout-disabled"
            }
            disabled={cartItems.length === 0 ? true : false}
          >
            Checkout
          </button>
        </Link>
      )}

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
