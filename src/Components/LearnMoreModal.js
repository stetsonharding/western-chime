import React from "react";

import "../css/LearnMoreModal.css";

function LearnMoreModal({
  setLearnMoreModalData,
  learnMoreModalData,
  addItemToCart,
}) {
  return (
    learnMoreModalData && (
      <div
        className="modal-background"
        onClick={(e) => {
          setLearnMoreModalData(false);
        }}
      >
        <div className="modal-content">
          <div className="information-container">
            <h2 className="title">{learnMoreModalData.name}</h2>

            <div className="beverage-data-container">
              <div className="data">
                <div className="beverage-details">Beverage</div>
                <div className="beverage-details">
                  ABV: {learnMoreModalData.abv}
                </div>
                <div className="beverage-details">
                  IBU: {learnMoreModalData.ibu}
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
                onClick={(e) => {
                  e.stopPropagation();
                  addItemToCart(learnMoreModalData.id, learnMoreModalData);
                }}
              >
                Add to cart ${learnMoreModalData.srm}
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
