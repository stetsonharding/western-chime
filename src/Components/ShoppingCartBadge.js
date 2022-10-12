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
  let TAX_RATE = 0.1;
  let subTotal = 0;

  //Formatting price for USD.
  function formatPrice(price) {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  //Calculating subTotal
  cartItems.forEach((item) => {
    subTotal += item.srm;
  });

  let taxes = subTotal * TAX_RATE;
  let grandTotal = subTotal + taxes;
  return (
    <>
      {isCartQuickviewShown && (
        <div className="cart-quickview">
          <h2 id="quickview-title">
            Your Shoppin' Cart{" "}
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
              />
            ))}
          </div>
          <div className="pricing-container">
            <strong>
              Subtotal:
              {formatPrice(subTotal)}
            </strong>
            <strong>Taxes: {formatPrice(taxes)}</strong>
            <strong>
              <span style={{ color: "#943c1f", fontSize: "28px" }}>
                Grand Total:
              </span>{" "}
              {formatPrice(grandTotal)}
            </strong>
          </div>
        </div>
      )}
    </>
  );
}
