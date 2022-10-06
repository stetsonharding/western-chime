import React from "react";

import "../css/Card.css";

//images
import ImageNotLiked from "../Assets/imageNotLiked.png";
import ImageLiked from "../Assets/ImageLiked.png";
import AddToCart from "../Assets/addtocart.png";
import revolver from "../Assets/revolver.png";
import addedToCart from "../Assets/addedToCart.png";

function Card({
  img,
  name,
  price,
  beverage,
  index,
  beverages,
  setBeverages,
  setFavoritedBeverages,
  setCartItems,
}) {
  const favoriteImage = (id) => {
    const newArr = beverages.map((beverage) => {
      if (beverage.id === id) {
        return {
          ...beverage,
          isFavorited: !beverage.isFavorited,
        };
      }
      return beverage;
    });

    //Filtering all beverages from state that have isFavorited set to true and setting to favorited state.
    let favorited = newArr.filter((item) => item.isFavorited === true);
    setFavoritedBeverages(favorited);

    //Updating all beverages state when favorited.
    setBeverages(newArr);
  };

  const addItemToCart = (id) => {
    const newArr = beverages.map((beverage) => {
      if (beverage.id === id) {
        return {
          ...beverage,
          isAddedToCart: !beverage.isAddedToCart,
        };
      }
      return beverage;
    });
    //Finding all items with isAddedToCart equal to true and setting them inside state.
    const itemsAddedToCart = newArr.filter(
      (item) => item.isAddedToCart === true
    );
    setCartItems(itemsAddedToCart);
    setBeverages(newArr);
  };

  //If beverage is favorited, display favorited image else display default image.
  const favoriteIcon = () => {
    if (beverage.isFavorited) {
      return (
        <img
          onClick={() => favoriteImage(beverage.id)}
          src={ImageLiked}
          height="30"
          width="30"
          alt="favorite Button"
          className="favorite-button"
        />
      );
    } else {
      return (
        <img
          onClick={() => favoriteImage(beverage.id)}
          src={ImageNotLiked}
          height="30"
          width="30"
          alt="favorite Button"
          className="favorite-button"
        />
      );
    }
  };

  //If beverage is added to cart, display added to cart image else display default image.
  const addToCartIcon = () => {
    if (beverage.isAddedToCart) {
      return (
        <img
          onClick={() => addItemToCart(beverage.id)}
          src={addedToCart}
          height="30"
          width="30"
          alt="Add to Cart Button"
          className="addToCart-button"
        />
      );
    } else {
      return (
        <img
          onClick={() => addItemToCart(beverage.id)}
          src={AddToCart}
          height="30"
          width="30"
          alt="Add to Cart Button"
          className="addToCart-button"
        />
      );
    }
  };

  return (
    <div className="card">
      <div className="card-interactions">
        {favoriteIcon()}
        {addToCartIcon()}
      </div>
      <div className="card-image-container">
        <img src={img} height="120" width="30" alt="Beverage" />
        <br />
        {img === "https://images.punkapi.com/v2/keg.png" && (
          <p
            style={{
              fontSize: "12px",
              fontStyle: "italic",
              padding: "0",
              margin: "0",
              color: "white",
            }}
          >
            Keg Only
          </p>
        )}
      </div>

      <div className="beverage-info-container">
        <p className="beverage-name">{name}</p>
        <p className="beverage-price">${price}</p>
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
