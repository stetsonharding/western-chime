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

  // const [grandTotal, setGrandTotal] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  // function formatPrice(price) {
  //   return price.toLocaleString("en-US", {
  //     style: "currency",
  //     currency: "USD",
  //   });
  // }

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
          <SubtotalAndTaxes
            grandTotal={grandTotal}
            formatPrice={formatPrice}
            taxes={taxes}
            subTotal={subTotal}
          />
          <QuickCartButton
            cartItems={cartItems}
            setIsCartQuickviewShown={setIsCartQuickviewShown}
          />
        </CartQuickView>
      )}
    </div>
  );
}
