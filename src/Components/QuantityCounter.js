import React from "react";
import "../css/QuantityCounter.css";

function QuantityCounter({ beverage, setQuantity, quantity }) {
  const incrementQuantity = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevState) => prevState - 1);
  };

  return (
    <div className="quantity-counter">
      <div className="decrement">
        <button
          className="quantity-btn"
          disabled={quantity <= 1 ? true : false}
          onClick={() => decrementQuantity()}
        >
          -
        </button>
      </div>
      <div>
        <h3 style={{}}>{quantity}</h3>
      </div>
      <div className="increment">
        <button
          className="quantity-btn"
          disabled={beverage.qty === 10 ? true : false}
          onClick={() => incrementQuantity()}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default QuantityCounter;
