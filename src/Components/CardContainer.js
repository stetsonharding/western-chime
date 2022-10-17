import React, { useState } from "react";

import "../css/CardContainer.css";

//Page images
import nextButton from "../Assets/nextbutton.png";
import prevButton from "../Assets/prevbutton.png";

//Components
import SearchInput from "./SearchInput";
import Card from "./Card";
// import CartItems from "./CartItems";

function CardContainer({
  beverages,
  errorMessage,
  NextPage,
  PreviousPage,
  currentPage,
  onSearchSubmit,
  setBeverages,
  setFavoritedBeverages,
  favoritedBeverages,
  setCartItems,
  setLearnMoreModalData,
  cartItems,
}) {
  //Used for enable/disable next page button.
  const DISABLED_LENGTH = 15;
  const [isFavoritedBeveragesShown, setIsFavoritedBeveragesShown] =
    useState(false);

  return (
    <div className="card-container">
      <div className="page-button-container">
        <button
          className="page-buttons"
          onClick={() => PreviousPage()}
          disabled={currentPage === 1 ? true : false}
        >
          <img
            src={prevButton}
            alt="Previous Page"
            style={{
              opacity: currentPage === 1 ? ".6" : "1",
              cursor: currentPage === 1 && "not-allowed",
            }}
          />
        </button>

        {/* Container for search input, beer cards, and filter */}
        <div className="search-api-container">
          {/* Search Input component */}
          <div className="search-input-container">
            <SearchInput onSearchSubmit={(query) => onSearchSubmit(query)} />
          </div>

          {/* View Favorited Beverages */}
          <div className="beer-filters-container">
            {favoritedBeverages.length > 0 &&
            isFavoritedBeveragesShown === false ? (
              <p onClick={() => setIsFavoritedBeveragesShown(true)}>
                View Favorited Beverages
              </p>
            ) : isFavoritedBeveragesShown === true ? (
              <p onClick={() => setIsFavoritedBeveragesShown(false)}>
                Back to the Saloon
              </p>
            ) : null}
          </div>

          {/* === */}
          {/* API error message */}
          {errorMessage && (
            <div className="error-message-container">
              <p>{errorMessage}</p>
            </div>
          )}
          {/* ==== */}
          {/* Mapping Cards*/}
          {isFavoritedBeveragesShown === true &&
          favoritedBeverages.length > 0 ? (
            <div className="all-cards-container">
              {favoritedBeverages.map((beverage, index) => (
                <Card
                  key={beverage.id}
                  img={beverage.image_url}
                  name={beverage.name}
                  price={beverage.srm}
                  beverage={beverage}
                  index={index}
                  beverages={beverages}
                  setBeverages={setBeverages}
                  setFavoritedBeverages={setFavoritedBeverages}
                  setCartItems={setCartItems}
                  setLearnMoreModalData={setLearnMoreModalData}
                  cartItems={cartItems}
                />
              ))}
            </div>
          ) : (
            <div className="all-cards-container">
              {beverages.map((beverage, index) => (
                <Card
                  key={beverage.id}
                  img={beverage.image_url}
                  name={beverage.name}
                  price={beverage.srm}
                  beverage={beverage}
                  index={index}
                  beverages={beverages}
                  setBeverages={setBeverages}
                  setFavoritedBeverages={setFavoritedBeverages}
                  setCartItems={setCartItems}
                  setLearnMoreModalData={setLearnMoreModalData}
                  cartItems={cartItems}
                />
              ))}
            </div>
          )}
          {/* === */}
        </div>
        <button
          className="page-buttons"
          onClick={() => NextPage()}
          disabled={beverages.length === DISABLED_LENGTH ? false : true}
        >
          <img
            src={nextButton}
            alt="Next Page"
            style={{
              opacity: beverages.length !== DISABLED_LENGTH ? ".6" : "1",
              cursor: beverages.length !== DISABLED_LENGTH && "not-allowed",
            }}
          />
        </button>
      </div>
    </div>
  );
}

export default CardContainer;
