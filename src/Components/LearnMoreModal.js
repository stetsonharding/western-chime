import React, { useEffect } from "react";

import "../css/LearnMoreModal.css";

function LearnMoreModal({
  setLearnMoreModalData,
  learnMoreModalData,
  setCartItems,
  cartItems,
  setBeverages,
  beverages,
}) {
  //Adding item to cart when viewing modal.
  //Updates idAddedToCart to display shopping cart icon instead of plus sign.
  const AddItemToCart = (id) => {
    setCartItems((prevItems) => [...prevItems, learnMoreModalData]);

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
  };

  //Function to check if item is already in cart. Using this for conditional rendering 'add to cart' button text.
  const ItemAlreadyAddedToCart = () => {
    return cartItems.find((item) => item.name === learnMoreModalData.name);
  };

  //Calling "ItemAlreadyAddedToCart" upon rendering
  useEffect(() => {
    ItemAlreadyAddedToCart();
  });

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
