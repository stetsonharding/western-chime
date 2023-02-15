import React, { useState, useEffect, useContext } from "react";

//images
import ShoppingCart from "../Assets/ShoppingCart.png";
//css
import "../css/ShoppingCartBadge.css";
//Context
import { CartItemsContext } from "../Contexts/CartItemsContext";

import CartQuickView from "./CartQuickView";
import QuickCartButton from "./QuickCartButton";
import SubtotalAndTaxes from "./SubtotalAndTaxes";

export default function ShoppingCartBadge({
  grandTotal,
  setGrandTotal,

  setEditedCartItem,
}) {
  const [isCartQuickviewShown, setIsCartQuickviewShown] = useState(false);
  const [taxes, setTaxes] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  const { cartItems } = useContext(CartItemsContext);

  const OrderCostCalculations = () => {
    let TAX_RATE = 0.1;
    let subTotalCalculation = 0;
    //loop through all items in cart, multiply price * qty and add that total to the current subtotal.
    cartItems.forEach((item) => {
      subTotalCalculation += item.srm * item.qty;
    });
    //Update subTotal state
    setSubTotal(subTotalCalculation);

    //subtotal * taxe_rate to get the total ammount in taxes
    //update taxes state
    setTaxes(subTotal * TAX_RATE);

    //Updating grandTotal by adding subtotal and taxes together.
    setGrandTotal(subTotal + taxes);
  };

  useEffect(() => {
    OrderCostCalculations();
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
          setIsCartQuickviewShown={setIsCartQuickviewShown}
          title={"Your shoppin' cart "}
          setEditedCartItem={setEditedCartItem}
          grandTotal={grandTotal}
          setGrandTotal={setGrandTotal}
        >
          {cartItems.length !== 0 && (
            <SubtotalAndTaxes
              grandTotal={grandTotal}
              taxes={taxes}
              subTotal={subTotal}
              totalColor="#7b3018"
              headingColor="#7b3018"
            />
          )}

          <QuickCartButton setIsCartQuickviewShown={setIsCartQuickviewShown} />
        </CartQuickView>
      )}
    </div>
  );
}
