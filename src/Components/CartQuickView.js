import React from "react";

import CartItems from "./CartItems";

export default function CartQuickView({
  cartItems,
  setCartItems,
  setIsCartQuickviewShown,
  setBeverages,
  beverages,
  redeemTotal,
  ...props
}) {
  return (
    <>
      <div
        className={
          setIsCartQuickviewShown
            ? "cart-quickview"
            : " cart-quickview-checkout"
        }
        style={{ backgroundColor: props.color }}
      >
        <h2 id="quickview-title" style={{ color: props.headingColor }}>
          {props.title}
          <span id="quickview-cart-length">({cartItems.length})</span>
        </h2>
        <div className="cart-item-quickview-container">
          {cartItems.map((item, index) => (
            <CartItems
              key={item.id}
              item={item}
              index={index}
              setCartItems={setCartItems}
              cartItems={cartItems}
              setBeverages={setBeverages}
              beverages={beverages}
              cartItem={item.id}
            />
          ))}
        </div>

        {cartItems.length <= 0 && <p>Your cart is empty! Let's fix that.</p>}

        {props.children}
      </div>
    </>
  );
}
