import React, { useState } from "react";

//images
import ShoppingCart from "../Assets/ShoppingCart.png";
//css
import "../css/ShoppingCartBadge.css";

import CartItems from "./CartItems";

export function ShoppingCartBadge({ cartItems, setCartItems }) {
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
      <CartQuickView
        cartItems={cartItems}
        isCartQuickviewShown={isCartQuickviewShown}
        setCartItems={setCartItems}
      />
    </div>
  );
}

export function CartQuickView({
  isCartQuickviewShown,
  cartItems,
  setCartItems,
}) {
  return (
    <>
      {isCartQuickviewShown && (
        <div className="cart-quickview">
          <h2 id="quickview-title">
            Your Shoppin' Cart{" "}
            <span id="quickview-cart-length">({cartItems.length})</span>
          </h2>
          <div className="cart-items-quickview-container">
            {cartItems.map((item, index) => (
              <CartItems
                key={item.id}
                item={item}
                index={index}
                setCartItems={setCartItems}
                cartItems={cartItems}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
