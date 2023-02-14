import React, { useState, useContext } from "react";

import "../css/CardContainer.css";

import { GetBeveragesContext } from "../Contexts/GetBeveragesContext";

//Page images
import nextButton from "../Assets/nextbutton.png";
import prevButton from "../Assets/prevbutton.png";

//Components
import SearchInput from "./SearchInput";
import Card from "./Card";
import ViewFavoritedBeveragesBtns from "./ViewFavoritedBeveragesBtns";

function CardContainer({
  //beverages,
  // errorMessage,
  // NextPage,
  // PreviousPage,
  // currentPage,
  //onSearchSubmit,
  // setBeverages,
  //setFavoritedBeverages,
  //favoritedBeverages,
  // setCartItems,
  setLearnMoreModalData,
  //cartItems,
  viewItemQuantity,
  setQuantity,
  quantity,
}) {
  // const [currentPage, setCurrentPage] = useState(1);
  const { beverages, errorMessage, currentPage, setCurrentPage } =
    useContext(GetBeveragesContext);
  const [favoritedBeverages, setFavoritedBeverages] = useState([]);

  // Pagination for next and prev pages
  const PreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const NextPage = () => {
    setCurrentPage(currentPage + 1);
  };
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
          <SearchInput />
          {/* <SearchInput onSearchSubmit={(query) => onSearchSubmit(query)} /> */}

          {/* View Favorite Beverages - Back to the Saloon buttons. */}
          <ViewFavoritedBeveragesBtns
            favoritedBeverages={favoritedBeverages}
            setIsFavoritedBeveragesShown={setIsFavoritedBeveragesShown}
            isFavoritedBeveragesShown={isFavoritedBeveragesShown}
          />
          {/* === */}

          {/* API error message */}
          {errorMessage && (
            <div className="error-message-container">
              <p>{errorMessage}</p>
            </div>
          )}
          {/* ==== */}
          {/* Mapping Favorited Cards*/}
          {isFavoritedBeveragesShown === true &&
          favoritedBeverages.length > 0 ? (
            <div className="all-cards-container">
              {favoritedBeverages.map((beverage) => (
                <Card
                  key={beverage.id}
                  beverage={beverage}
                  // beverages={beverages}
                  // setBeverages={setBeverages}
                  setFavoritedBeverages={setFavoritedBeverages}
                  //setCartItems={setCartItems}
                  setLearnMoreModalData={setLearnMoreModalData}
                  //cartItems={cartItems}
                />
              ))}
            </div>
          ) : (
            // Mapping all cards
            <div className="all-cards-container">
              {beverages.map((beverage, index) => (
                <Card
                  key={beverage.id}
                  beverage={beverage}
                  index={index}
                  //beverages={beverages}
                  //setBeverages={setBeverages}
                  setFavoritedBeverages={setFavoritedBeverages}
                  //setCartItems={setCartItems}
                  setLearnMoreModalData={setLearnMoreModalData}
                  //cartItems={cartItems}
                  viewItemQuantity={viewItemQuantity}
                  setQuantity={setQuantity}
                  quantity={quantity}
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
