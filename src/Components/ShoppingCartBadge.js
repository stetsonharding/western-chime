import React, { useState, useEffect } from "react";

//images
import ShoppingCart from "../Assets/ShoppingCart.png";
//css
import "../css/ShoppingCartBadge.css";

import CartQuickView from "./CartQuickView";
import QuickCartButton from "./QuickCartButton";
import SubtotalAndTaxes from "./SubtotalAndTaxes";

export default function ShoppingCartBadge({
  cartItems,
  setCartItems,
  setBeverages,
  beverages,
  grandTotal,
  setGrandTotal,
  formatPrice,
}) {
  const [isCartQuickviewShown, setIsCartQuickviewShown] = useState(false);
  const [taxes, setTaxes] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    let TAX_RATE = 0.1;
    let subTotal = 0;

    cartItems.forEach((item) => {
      setSubTotal((subTotal += item.srm * item.qty));
    });

    setTaxes(subTotal * TAX_RATE);
    setGrandTotal(subTotal + taxes);
  }, [subTotal, cartItems, taxes]);

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
          title={"Your shoppin' cart "}
        >
          {cartItems.length !== 0 && (
            <SubtotalAndTaxes
              grandTotal={grandTotal}
              formatPrice={formatPrice}
              taxes={taxes}
              subTotal={subTotal}
              totalColor="#7b3018"
              headingColor="#7b3018"
            />
          )}

          <QuickCartButton
            cartItems={cartItems}
            setIsCartQuickviewShown={setIsCartQuickviewShown}
          />
        </CartQuickView>
      )}
    </div>
  );
}
