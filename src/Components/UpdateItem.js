import React from "react";

function UpdateItem({ beverage, quantity, cartItems, setCartItems }) {
  //function to update quantity if item exists in users cart already.
  const updateItem = (beverage) => {
    const usersCart = [...cartItems];
    beverage.qty = quantity;
    beverage.quantityConfirm = false;

    setCartItems([
      ...usersCart.filter((item) => item.id !== beverage.id),
      beverage,
    ]);
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
