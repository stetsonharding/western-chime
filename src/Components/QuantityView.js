import React from "react";

import "../css/QuantityView.css";
import QuantityCounter from "./QuantityCounter";

function QuantityView({ beverage, beverages, setBeverages }) {
  function test(id) {
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

  return (
    <div className="quantity-view">
      <div className="quantity-information">
        <div id="quantity-back">
          <span onClick={() => test(beverage.id)}>&lt;</span>
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
        />
      </div>
      <div className="quantity-confirm">
        <button className="confirm-btn">Confirm</button>
      </div>
    </div>
  );
}

export default QuantityView;
