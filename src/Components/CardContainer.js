import React from "react";

import "../css/CardContainer.css";

import nextButton from "../Assets/nextbutton.png";
import prevButton from "../Assets/prevbutton.png";

function CardContainer() {
  return (
    <div className="card-container">
      <div className="page-button-container">
        <span className="page-buttons">
          <img src={prevButton} alt="Previous Page" />
        </span>

        <span className="page-buttons">
          <img src={nextButton} alt="Next Page" />
        </span>
      </div>
    </div>
  );
}

export default CardContainer;
