import React, { useState, useEffect, useContext } from "react";

import "../css/QuantityView.css";
import QuantityCounter from "./QuantityCounter";
import UpdatedNotification from "./UpdatedNotification";
import UpdateItem from "./UpdateItem";

import { GetBeveragesContext } from "../Contexts/GetBeveragesContext";
import { CartItemsContext } from "../Contexts/CartItemsContext";

function QuantityView({ beverage, setQuantity, quantity }) {
  const { beverages, setBeverages } = useContext(GetBeveragesContext);
  const { setCartItems } = useContext(CartItemsContext);

  //Showing update button if cartUpdated is true
  const [cartUpdated, setCartUpdated] = useState(false);

  useEffect(() => {
    setQuantity(beverage.qty);
  }, [beverage.qty, setQuantity]);

  //Go back to view product home screen from quantity view by setting quantityConfirm to false
  function leaveQuantityView(id) {
    let updated = beverages.map((beverage) => {
      if (beverage.id === id) {
        return {
          ...beverage,
          quantityConfirm: false,
        };
      }
      return beverage;
    });
    setBeverages(updated);
  }

  //Add item to cart button
  const addToCart = (beverage, id) => {
    //Set current beverage quantity and add to cart
    beverage.qty = quantity;
    setCartItems((prevItems) => [...prevItems, beverage]);

    //conditionally rendering 'update' button by setting cartUpdated to true.
    setCartUpdated(true);

    //After 900s, leave quantity view by setting quantityConfirm to false and is addedToCart to true to display cart icon.
    setTimeout(() => {
      setCartUpdated(false);
      let updatedBeverages = beverages.map((beverage) => {
        if (id === beverage.id) {
          return {
            ...beverage,
            isAddedToCart: true,
            quantityConfirm: !beverage.quantityConfirm,
          };
        }
        return beverage;
      });
      setBeverages(updatedBeverages);
    }, 400);
  };

  return (
    <div className="quantity-view">
      <div className="quantity-information">
        <div id="quantity-back">
          <span onClick={() => leaveQuantityView(beverage.id)}>&lt;</span>
          <div>
            <img src={beverage.image_url} alt="" height="80" />
          </div>
        </div>
        <div className="quantity-product-details">
          <p id="name">{beverage.name}</p>

          <p className="ibu-abv">IBU: {beverage.ibu}%</p>

          <p className="ibu-abv">ABV: {beverage.abv}%</p>
        </div>
      </div>

      <div className="quantity-counter">
        <QuantityCounter quantity={quantity} setQuantity={setQuantity} />
      </div>
      {cartUpdated !== true ? (
        <div className="quantity-confirm">
          {beverage.isAddedToCart ? (
            <UpdateItem beverage={beverage} quantity={quantity} />
          ) : (
            <button
              className="confirm-btn"
              onClick={() => addToCart(beverage, beverage.id)}
            >
              Confirm ${beverage.srm * quantity}
            </button>
          )}
        </div>
      ) : (
        <UpdatedNotification notification="Item added to cart" />
      )}
    </div>
  );
}

export default QuantityView;
