import React, { useState, useEffect } from "react";

//images
import ShoppingCart from "../Assets/ShoppingCart.png";
//css
import "../css/ShoppingCartBadge.css";

import CartItems from "./CartItems";
import QuickCartButton from "./QuickCartButton";

export function ShoppingCartBadge({
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

export function CartQuickView({
  cartItems,
  setCartItems,
  setIsCartQuickviewShown,
  setBeverages,
  beverages,
  redeemTotal,
  ...props
}) {
  const [grandTotal, setGrandTotal] = useState("");
  const [taxes, setTaxes] = useState("");
  const [subTotal, setSubTotal] = useState("");

  //Format taxes, subtotal, and grandtotal
  function formatPrice(price) {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  //Calculating total when cart items have been added or removed.
  useEffect(() => {
    let TAX_RATE = 0.1;
    let subTotal = 0;

    cartItems.forEach((item) => {
      setSubTotal((subTotal += item.srm));
    });

    setTaxes(subTotal * TAX_RATE);
    setGrandTotal(subTotal + taxes);
  }, [subTotal, cartItems, taxes]);

  return (
    <>
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
              setBeverages={setBeverages}
              beverages={beverages}
              cartItem={item.id}
            />
          ))}
        </div>

        {cartItems.length > 0 ? (
          <div className="pricing-container">
            <strong>Subtotal: {formatPrice(subTotal)}</strong>
            <strong>Taxes: {formatPrice(taxes)}</strong>
            <strong>
              <span style={{ color: "#943c1f", fontSize: "28px" }}>
                Grand Total:
              </span>
              {formatPrice(grandTotal)}
            </strong>
          </div>
        ) : (
          <p>Your cart is empty! Let's fix that.</p>
        )}
        {props.children}
      </div>
    </>
  );
}
