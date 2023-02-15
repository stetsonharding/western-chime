import React, { useContext } from "react";

import CartItems from "./CartItems";

import { CartItemsContext } from "../Contexts/CartItemsContext";

export default function CartQuickView({
  setIsCartQuickviewShown,
  redeemTotal,
  setEditedCartItem,

  ...props
}) {
  const { cartItems } = useContext(CartItemsContext);

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
              setEditedCartItem={setEditedCartItem}
            />
          ))}
        </div>

        {cartItems.length <= 0 && <p>Your cart is empty! Let's fix that.</p>}

        {props.children}
      </div>
    </>
  );
}
