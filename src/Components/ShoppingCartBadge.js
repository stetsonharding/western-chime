import React, { useState } from "react";

//images
import ShoppingCart from "../Assets/ShoppingCart.png";
//css
import "../css/ShoppingCartBadge.css";

import CartItems from "./CartItems";

export function ShoppingCartBadge({ cartItems }) {
  const [isCartQuickviewShown, setIsCartQuickviewShown] = useState(false);

  return (
    <div className="shopping-cart">
      {cartItems.length > 0 && (
        <div className="cart-size">
          <p>{cartItems.length}</p>
        </div>
      )}
      <img
        src={ShoppingCart}
        height="50"
        width="50"
        alt="Shopping Cart"
        onClick={() => setIsCartQuickviewShown(!isCartQuickviewShown)}
      />
      <CartQuickView isCartQuickviewShown={isCartQuickviewShown} />
    </div>
  );
}

export function CartQuickView({ isCartQuickviewShown }) {
  return (
    <>
      {isCartQuickviewShown && (
        <div className="cart-quickview">
          <h2>Your Shoppin' Cart (3)</h2>
          <div className="quickview-container">
            <CartItems />
          </div>
        </div>
      )}
    </>
  );
}
