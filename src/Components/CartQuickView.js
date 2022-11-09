import React, { useState, useEffect } from "react";

import CartItems from "./CartItems";
import GrandTotal from "./GrandTotal";
import SubtotalAndTaxes from "./SubtotalAndTaxes";

export default function CartQuickView({
  cartItems,
  setCartItems,
  setIsCartQuickviewShown,
  setBeverages,
  beverages,
  redeemTotal,

  ...props
}) {
  // const [grandTotal, setGrandTotal] = useState(0);
  // const [taxes, setTaxes] = useState(0);
  // const [subTotal, setSubTotal] = useState(0);

  //Format taxes, subtotal, and grandtotal
  function formatPrice(price) {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  //Calculating total when cart items have been added or removed.
  // useEffect(() => {
  //   let TAX_RATE = 0.1;
  //   let subTotal = 0;

  //   cartItems.forEach((item) => {
  //     setSubTotal((subTotal += item.srm));
  //   });

  //   setTaxes(subTotal * TAX_RATE);
  //   setGrandTotal(subTotal + taxes);
  // }, [subTotal, cartItems, taxes]);

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
            {/* <SubtotalAndTaxes
              grandTotal={grandTotal}
              formatPrice={formatPrice}
              taxes={taxes}
              subTotal={subTotal}
            /> */}
            {/* <strong>Subtotal: {formatPrice(subTotal)}</strong>
            <strong>Taxes: {formatPrice(taxes)}</strong>
            <GrandTotal grandTotal={grandTotal} formatPrice={formatPrice} /> */}
            {/* <strong>
              <span style={{ color: "#943c1f", fontSize: "28px" }}>
                Grand Total:
              </span>
              {formatPrice(grandTotal)}
            </strong> */}
          </div>
        ) : (
          <p>Your cart is empty! Let's fix that.</p>
        )}
        {props.children}
      </div>
    </>
  );
}
