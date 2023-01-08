import React, { useState } from "react";

import "../css/QuantityView.css";
import QuantityCounter from "./QuantityCounter";
import UpdatedNotification from "./UpdatedNotification";
import UpdateItem from "./UpdateItem";

function QuantityView({
  beverage,
  beverages,
  setBeverages,
  cartItems,
  setCartItems,
}) {
  const [quantity, setQuantity] = useState(beverage.qty);
  const [cartUpdated, setCartUpdated] = useState(false);

  console.log(beverage.srm);

  //Go back to view product home screen from quantity view by setting quantityConfirm to false
  function leaveQuantityView(id, beverage) {
    if (!cartItems.includes(beverage)) {
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
    } else {
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
  }

  const confirmQuantity = (id) => {
    //Add item to cart
    setCartItems((prevItems) => [...prevItems, beverage]);
    //Show 'item added to cart' notification/component
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
    }, 900);
  };

  return (
    <div className="quantity-view">
      <div className="quantity-information">
        <div id="quantity-back">
          <span onClick={() => leaveQuantityView(beverage.id, beverage)}>
            &lt;
          </span>
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
        <QuantityCounter
          beverage={beverage}
          beverages={beverages}
          setBeverages={setBeverages}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </div>
      {cartUpdated !== true ? (
        <div className="quantity-confirm">
          {beverage.isAddedToCart ? (
            <UpdateItem
              beverage={beverage}
              quantity={quantity}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          ) : (
            <button
              className="confirm-btn"
              onClick={() => confirmQuantity(beverage.id)}
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
