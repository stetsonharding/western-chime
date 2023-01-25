import React from "react";
import "../css/QuantityCounter.css";

function QuantityCounter({ beverage, beverages, quantity, setQuantity }) {
  const incrementQuantity = (id) => {
    beverages.map((beverage) => {
      if (id === beverage.id) {
        return {
          ...beverage,
          qty: beverage.qty++,
        };
      }
      return beverage;
    });

    setQuantity(beverage.qty);
  };

  const decrementQuantity = (id) => {
    beverages.map((beverage) => {
      if (id === beverage.id) {
        return {
          ...beverage,
          qty: beverage.qty--,
        };
      }
      return beverage;
    });

    setQuantity(beverage.qty);
  };

  return (
    <div className="quantity-counter">
      <div className="decrement">
        <button
          className="quantity-btn"
          disabled={quantity <= 1 ? true : false}
          onClick={() => decrementQuantity(beverage.id)}
        >
          -
        </button>
      </div>
      <div>
        <h3 style={{}}>{beverage.qty}</h3>
      </div>
      <div className="increment">
        <button
          className="quantity-btn"
          disabled={quantity === 10 ? true : false}
          onClick={() => incrementQuantity(beverage.id)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default QuantityCounter;
