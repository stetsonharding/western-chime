import React from "react";

import "../css/Card.css";

//images
import ImageNotLiked from "../Assets/imageNotLiked.png";
import AddToCart from "../Assets/addtocart.png";
import beerTest from "../Assets/beertest.png";
import revolver from "../Assets/revolver.png";

function Card() {
  return (
    <div className="card">
      <div className="card-interactions">
        <img
          src={ImageNotLiked}
          height="30"
          width="30"
          alt="favorite Button"
          className="favorite-button"
        />
        <img
          src={AddToCart}
          height="30"
          width="30"
          alt="Add to Cart Button"
          className="addToCart-button"
        />
      </div>
      <div className="card-image-container">
        <img src={beerTest} height="120" width="30" alt="Beverage" />
      </div>

      <div className="beverage-info-container">
        <p className="beverage-name">Best Beer</p>
        <p className="beverage-price"> $28</p>
      </div>

      <div className="revolver-container beverage-info">
        <img
          src={revolver}
          alt="Revolver weapon"
          height="35"
          width="40"
          className="revolver-img"
        />

        <div className="revolver-bullet"></div>

        <div className="learn-more">
          <span>Learn More</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
