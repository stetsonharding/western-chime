import React, { useState } from "react";

import "../css/LearnMoreModal.css";

function LearnMoreModal({
  setLearnMoreModalData,
  learnMoreModalData,
  viewItemQuantity,
}) {
  const [isAddToCartClicked, setIsAddToCartClicked] = useState(false);

  const ConditionalRenderAddToCart = (e) => {
    setIsAddToCartClicked(true);
    viewItemQuantity(learnMoreModalData.id, learnMoreModalData, e);
    setTimeout(() => {
      setIsAddToCartClicked(false);
    }, 1000);
  };

  return (
    learnMoreModalData && (
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
                id="add-to-cart"
                onClick={(e) => ConditionalRenderAddToCart(e)}
              >
                {isAddToCartClicked
                  ? "Beverage Added"
                  : `Add to cart $${learnMoreModalData.srm}`}
              </button>
              <button
                id="add-to-cart"
                onClick={(e) => {
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
    )
  );
}

export default LearnMoreModal;
