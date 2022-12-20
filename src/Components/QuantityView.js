import React, { useState } from "react";

import "../css/QuantityView.css";
import QuantityCounter from "./QuantityCounter";

function QuantityView({ beverage, beverages, setBeverages, setCartItems }) {
  const [quantity, setQuantity] = useState(1);

  //Go back to view product home screen from quantity view.
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

  const confirmQuantity = (id, itemAddedToCart) => {
    let updatedBeverages = beverages.map((beverage) => {
      if (id === beverage.id) {
        return {
          ...beverage,
          isAddedToCart: !beverage.isAddedToCart,
          quantityConfirm: !beverage.quantityConfirm,
        };
      }
      return beverage;
    });
    setCartItems((prevItems) => [...prevItems, beverage]);
    setBeverages(updatedBeverages);
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
        <QuantityCounter
          beverage={beverage}
          beverages={beverages}
          setBeverages={setBeverages}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </div>
      <div className="quantity-confirm">
        <button
          className="confirm-btn"
          onClick={() => confirmQuantity(beverage.id, beverage)}
        >
          Confirm ${beverage.srm * quantity}
        </button>
      </div>
    </div>
  );
}

export default QuantityView;
