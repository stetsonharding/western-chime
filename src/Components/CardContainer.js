import React from "react";

import "../css/CardContainer.css";

import nextButton from "../Assets/nextbutton.png";
import prevButton from "../Assets/prevbutton.png";

import SearchInput from "./SearchInput";
import Card from "./Card";

function CardContainer() {
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
          <div className="beer-filters-container">
            <p>Filter beers by IBU</p>
            <p>Filter beers by ABV</p>
          </div>
          {/* === */}
          {/* Mapping Card Components goes here */}
          <div className="all-cards-container">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          {/* === */}
        </div>

        <span className="page-buttons">
          <img src={nextButton} alt="Next Page" />
        </span>
      </div>
    </div>
  );
}

export default CardContainer;
