import React, { useState } from "react";

import "../css/QuantityView.css";
import QuantityCounter from "./QuantityCounter";

function QuantityView({ beverage, beverages, setBeverages }) {
  const [quantity, setQuantity] = useState(1);

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

  const confirmQuantity = (id) => {
    let updatedBeverages = beverages.map((beverage) => {
      if (id === beverage.id) {
        return {
          ...beverage,
          qty: quantity,
        };
      }
      return beverage;
    });
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
          onClick={() => confirmQuantity(beverage.id)}
        >
          Confirm ${beverage.srm * quantity}
        </button>
      </div>
    </div>
  );
}

export default QuantityView;
