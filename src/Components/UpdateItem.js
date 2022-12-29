import React from "react";

function UpdateItem({ beverage, quantity, cartItems, setCartItems }) {
  //function to update quantity if item exists in users cart already.
  const updateItem = (beverage) => {
    const usersCart = [...cartItems];
    const check = usersCart.every((item) => {
      return item.id !== beverage.id;
    });
    const cartData = usersCart.filter((el) => {
      return el.id === beverage.id;
    });
    if (check) {
      setCartItems([...usersCart, ...cartData]);
    } else {
      const itemForCountIncrease = usersCart.find(
        (item) => item.id === beverage.id
      );
      itemForCountIncrease.qty = quantity;

      setCartItems([
        ...usersCart.filter((item) => item.id !== beverage.id),
        itemForCountIncrease,
      ]);
    }
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
