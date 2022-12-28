import React from "react";

function UpdateItem({ beverage, quantity, cartItems, setCartItems }) {
  const updateItem = (beverage) => {
    let usersCart = [...cartItems];

    let updatedCart = usersCart.map((item) => {
      if (item.id === beverage.id) {
        return {
          ...beverage,
          qty: quantity,
          quantityConfirm: false,
        };
      }
      return beverage;
    });

    setCartItems(updatedCart);
    console.log(updatedCart);
  };

  return (
    <>
      <button className="confirm-btn" onClick={() => updateItem(beverage)}>
        Update ${beverage.srm * quantity}
      </button>
    </>
  );
}

export default UpdateItem;
