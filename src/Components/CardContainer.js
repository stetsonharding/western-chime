import React from "react";

import "../css/CardContainer.css";

//Page images
import nextButton from "../Assets/nextbutton.png";
import prevButton from "../Assets/prevbutton.png";

//Components
import SearchInput from "./SearchInput";
import Card from "./Card";

function CardContainer({ beverages, errorMessage }) {
  return (
    <div className="card-container">
      <div className="page-button-container">
        <span className="page-buttons">
          <img src={prevButton} alt="Previous Page" />
        </span>

        {/* Container for search input and beer cards. */}
        <div className="search-api-container">
          {/* Search Input component */}
          <div className="search-input-container">
            <SearchInput />
          </div>
          {/* Filter btns */}
          <div className="beer-filters-container">
            <p>Filter beers by IBU</p>
            <p>Filter beers by ABV</p>
          </div>
          {/* === */}
          {/* Mapping Card Components goes here */}
          {errorMessage && (
            <div className="error-message-container">
              <p>{errorMessage}</p>
            </div>
          )}
          {/* ==== */}
          <div className="all-cards-container">
            {beverages.map((beverage, index) => (
              <Card
                key={beverage.id}
                img={beverage.image_url}
                name={beverage.name}
                price={beverage.srm}
              />
            ))}
          </div>
          {/* === */}
          {/* Error Message */}
        </div>
        <span className="page-buttons">
          <img src={nextButton} alt="Next Page" />
        </span>
      </div>
    </div>
  );
}

export default CardContainer;
