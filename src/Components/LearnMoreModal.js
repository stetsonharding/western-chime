import React from "react";

import "../css/LearnMoreModal.css";

import TestImage from "../Assets/beertest.png";

function LearnMoreModal() {
  return (
    <div className="modal-container">
      <div className="information-container">
        <h2 className="title">Buzz</h2>

        <div className="beverage-data-container">
          <div className="data">
            <div className="beverage-details">Beverage</div>
            <div className="beverage-details">ABV: 44</div>
            <div className="beverage-details">IBU: 24</div>
          </div>

          <div className="description-container">
            <div className="description">
              <p>
                Our flagship beer that kick started the craft beer revolution.
                This is James and Martin's original take on an American IPA,
                subverted with punchy New Zealand hops. Layered with new world
                hops to create an all-out riot of grapefruit, pineapple and
                lychee b efore a spiky, mouth-puckering bitter finish.
              </p>
            </div>
          </div>
        </div>
        <div className="cart-button-container">
          <button id="add-to-cart">Add to cart $24</button>
        </div>
      </div>

      <div className="beverage-image-container">
        <img src={TestImage} alt="Beverage" width="100px" height="400px" />
      </div>
    </div>
  );
}

export default LearnMoreModal;
