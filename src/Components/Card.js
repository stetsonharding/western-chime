import React, { useState } from "react";

import "../css/Card.css";

//images
import ImageNotLiked from "../Assets/imageNotLiked.png";
import ImageLiked from "../Assets/ImageLiked.png";
import AddToCart from "../Assets/addtocart.png";
import revolver from "../Assets/revolver.png";
import addedToCart from "../Assets/addedToCart.png";
import QuantityView from "./QuantityView";

function Card({
  beverage,
  beverages,
  setBeverages,
  setFavoritedBeverages,
  setCartItems,
  setLearnMoreModalData,
  cartItems,
  addItemToCart,
}) {
  const favoriteImage = (id, e) => {
    const newArr = beverages.map((beverage) => {
      //Change favorited property if id matches
      if (beverage.id === id) {
        return {
          ...beverage,
          isFavorited: !beverage.isFavorited,
        };
      }
      e.stopPropagation();
      return beverage;
    });
    //Filtering all beverages that have isFavorited set to true, set result to state.
    let favorited = newArr.filter((item) => item.isFavorited === true);
    setFavoritedBeverages(favorited);
    //Updating all beverages to keep track of favorited/none favorited beverages.
    setBeverages(newArr);
  };

  const removeItemFromCart = (id, e) => {
    e.stopPropagation();
    //Changing isAddedToCart property.
    const updatedBeverages = beverages.map((beverage) => {
      if (beverage.id === id) {
        return {
          ...beverage,
          isAddedToCart: !beverage.isAddedToCart,
          qty: 1,
        };
      }
      return beverage;
    });
    //Filter cartItems to get only the items that are still in the cart.
    const items = [...cartItems].filter((item) => item.id !== id);
    setCartItems(items);
    //Update beverages based on if isAddedToCart has changed.
    setBeverages(updatedBeverages);
  };

  //If beverage is favorited, display favorited image else display default image.
  const favoriteIcon = () => {
    if (beverage.isFavorited) {
      return (
        <img
          onClick={(e) => favoriteImage(beverage.id, e)}
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
          onClick={(e) => favoriteImage(beverage.id, e)}
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
          onClick={(e) => removeItemFromCart(beverage.id, e)}
          src={addedToCart}
          height="30"
          width="30"
          alt="Item added to cart "
          className="addToCart-button"
        />
      );
    } else {
      return (
        <img
          onClick={(e) => addItemToCart(beverage.id, beverage, e)}
          src={AddToCart}
          height="30"
          width="30"
          alt="Add to cart"
          className="addToCart-button"
        />
      );
    }
  };

  return (
    <>
      {beverage.quantityConfirm ? (
        <QuantityView
          beverage={beverage}
          beverages={beverages}
          setBeverages={setBeverages}
          setCartItems={setCartItems}
          cartItems={cartItems}
        />
      ) : (
        <div
          className="card"
          onClick={(e) => {
            e.stopPropagation();
            setLearnMoreModalData(beverage);
          }}
        >
          <div className="card-interactions">
            {favoriteIcon()}
            {addToCartIcon()}
          </div>
          <div className="card-image-container">
            <img
              src={beverage.image_url}
              height="120"
              width="30"
              alt="Beverage"
            />
            <br />
            {beverage.image_url === "https://images.punkapi.com/v2/keg.png" && (
              <p
                style={{
                  fontSize: "8px",
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
            <p className="beverage-name">{beverage.name}</p>
            <p className="beverage-price">${beverage.srm}.00</p>
          </div>

          <div className="revolver-container beverage-info">
            <img
              src={revolver}
              alt="Weapon"
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
      )}
    </>
  );
}

export default Card;
