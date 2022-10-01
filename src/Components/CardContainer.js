import React, { useState, useEffect } from "react";

import "../css/CardContainer.css";

//Page images
import nextButton from "../Assets/nextbutton.png";
import prevButton from "../Assets/prevbutton.png";

//Components
import SearchInput from "./SearchInput";
import Card from "./Card";

function CardContainer() {
  const [beverages, setBeverages] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // Fetching Api and storing results in state.
  const GetApiBeverages = async () => {
    const URL = "https://api.punkapi.com/v2/beers?page=1&per_page=10";

    const APIbeverages = await fetch(URL);
    if (!APIbeverages.ok) {
      setErrorMessage("Oh no! Someones fussin' with our invitory! Try Again!");
    }
    const data = await APIbeverages.json();

    setBeverages(data);
  };

  useEffect(() => {
    GetApiBeverages();
  }, []);

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
        </div>

        <span className="page-buttons">
          <img src={nextButton} alt="Next Page" />
        </span>
      </div>
    </div>
  );
}

export default CardContainer;
