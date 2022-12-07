import React from "react";
import "../css/QuantityCounter.css";

function QuantityCounter({ beverage, beverages, setBeverages }) {
  const incrementQuantity = (id) => {
    let updatedBeverages = beverages.map((beverage) => {
      if (id === beverage.id) {
        return {
          ...beverage,
          qty: beverage.qty + 1,
        };
      }
      return beverage;
    });
    setBeverages(updatedBeverages);
  };

  return (
    <div className="quantity-counter">
      <div className="decrement">
        <button className="quantity-btn">-</button>
      </div>
      <div>
        <h3 style={{}}>{beverage.qty}</h3>
      </div>
      <div className="increment">
        <button
          className="quantity-btn"
          onClick={() => incrementQuantity(beverage.id)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default QuantityCounter;
