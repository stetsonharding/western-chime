import React from "react";

//images
import ShoppingCart from "../Assets/ShoppingCart.png";
//css
import "../css/ShoppingCartBadge.css";

export function ShoppingCartBadge({ cartItems }) {
  return (
    <div className="shopping-cart">
      {cartItems.length > 0 && (
        <div className="cart-size">
          <p>{cartItems.length}</p>
        </div>
      )}
      <img src={ShoppingCart} height="50" width="50" alt="Shopping Cart" />
    </div>
  );
}

export function CartQuickView() {
  return (
    <div className="cart-quickview">
      <h2>Your Shoppin' Cart (3)</h2>
      <div className="quickview-container"></div>
    </div>
  );
}
