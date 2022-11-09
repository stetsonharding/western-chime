import React, { useState } from "react";

//images
import ShoppingCart from "../Assets/ShoppingCart.png";
//css
import "../css/ShoppingCartBadge.css";

import CartQuickView from "./CartQuickView";
import QuickCartButton from "./QuickCartButton";

export default function ShoppingCartBadge({
  cartItems,
  setCartItems,
  setBeverages,
  beverages,
}) {
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
      {isCartQuickviewShown && (
        <CartQuickView
          cartItems={cartItems}
          setCartItems={setCartItems}
          setIsCartQuickviewShown={setIsCartQuickviewShown}
          setBeverages={setBeverages}
          beverages={beverages}
        >
          <QuickCartButton
            cartItems={cartItems}
            setIsCartQuickviewShown={setIsCartQuickviewShown}
          />
        </CartQuickView>
      )}
    </div>
  );
}
