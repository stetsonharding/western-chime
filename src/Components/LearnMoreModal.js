import React, { useEffect, useContext } from "react";

import "../css/LearnMoreModal.css";

import { CartItemsContext } from "../Contexts/CartItemsContext";

import { GetBeveragesContext } from "../Contexts/GetBeveragesContext";

function LearnMoreModal({
  setLearnMoreModalData,
  learnMoreModalData,
  // setCartItems,
  // cartItems,
  // setBeverages,
  //beverages,
}) {
  const { beverages, setBeverages } = useContext(GetBeveragesContext);
  const { setCartItems, cartItems } = useContext(CartItemsContext);

  //Adding item to cart function.
  const AddItemToCart = (id) => {
    setCartItems((prevItems) => [...prevItems, learnMoreModalData]);
    /*if true, change the value of the isAddedToCart property so that the product card now displays a shopping cart icon 
 rather than a + sign. */
    let updatedBeverages = beverages.map((beverage) => {
      if (id === beverage.id) {
        return {
          ...beverage,
          isAddedToCart: true,
        };
      }
      return beverage;
    });
    setBeverages(updatedBeverages);

    //Close out of learn more modal
    setTimeout(() => {
      setLearnMoreModalData();
    }, 400);
  };

  //Function to check if item is already in cart
  //Used for conditional rendering "add to cart' button and disabling 'add to cart' button
  const ItemAlreadyAddedToCart = () => {
    return cartItems.find((item) => item.name === learnMoreModalData.name);
  };

  //Check if item is in cart upon rendering.
  useEffect(() => {
    ItemAlreadyAddedToCart();
  }, []);

  return (
    <div className="modal-background">
      <div className="modal-content">
        <div className="information-container">
          <h2 className="title">{learnMoreModalData.name}</h2>

          <div className="beverage-data-container">
            <div className="data">
              <div className="beverage-details">
                <span style={{ color: "black" }}>Beverage</span>
              </div>
              <div className="beverage-details">
                <span>ABV: {learnMoreModalData.abv}</span>
              </div>
              <div className="beverage-details">
                <span>IBU: {learnMoreModalData.ibu}</span>
              </div>
            </div>

            <div className="description-container">
              <div className="description">
                <p>{learnMoreModalData.description}</p>
              </div>
            </div>
          </div>
          <div className="cart-button-container">
            <button
              id="modal-button"
              onClick={() => AddItemToCart(learnMoreModalData.id)}
              disabled={ItemAlreadyAddedToCart() !== undefined ? true : false}
            >
              {ItemAlreadyAddedToCart() !== undefined
                ? "Item in Cart"
                : `Add to cart $${learnMoreModalData.srm}`}
            </button>
            <button
              id="modal-button"
              onClick={() => {
                setLearnMoreModalData(false);
              }}
            >
              Close
            </button>
          </div>
        </div>

        <div className="beverage-image-container">
          <img
            src={learnMoreModalData.image_url}
            alt="Beverage"
            width="100px"
            height="400px"
          />
        </div>
      </div>
    </div>
  );
}

export default LearnMoreModal;
