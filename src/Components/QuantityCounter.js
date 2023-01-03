import React from "react";
import "../css/QuantityCounter.css";

function QuantityCounter({
  beverage,
  beverages,
  // setBeverages,
  quantity,
  setQuantity,
}) {
  // const [quantity, setQuantity] = useState(1);

  const incrementQuantity = (id) => {
    // setQuantity((prevState) => prevState + 1);

    beverages.map((beverage) => {
      if (id === beverage.id) {
        return {
          ...beverage,
          isAddedToCart: !beverage.isAddedToCart,
          quantityConfirm: !beverage.quantityConfirm,
          qty: beverage.qty++,
        };
      }
      return beverage;
    });

    setQuantity(beverage.qty);
  };

  const decrementQuantity = (id) => {
    // setQuantity((prevState) => prevState - 1);

    beverages.map((beverage) => {
      if (id === beverage.id) {
        return {
          ...beverage,
          isAddedToCart: !beverage.isAddedToCart,
          quantityConfirm: !beverage.quantityConfirm,
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
