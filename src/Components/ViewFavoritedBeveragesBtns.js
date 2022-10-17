import React from "react";

function ViewFavoritedBeveragesBtns({
  favoritedBeverages,
  isFavoritedBeveragesShown,
  setIsFavoritedBeveragesShown,
}) {
  return (
    <div className="beer-filters-container">
      {favoritedBeverages.length > 0 && isFavoritedBeveragesShown === false ? (
        <p onClick={() => setIsFavoritedBeveragesShown(true)}>
          View Favorited Beverages
        </p>
      ) : isFavoritedBeveragesShown === true &&
        favoritedBeverages.length > 0 ? (
        <p onClick={() => setIsFavoritedBeveragesShown(false)}>
          Back to the Saloon
        </p>
      ) : null}
    </div>
  );
}

export default ViewFavoritedBeveragesBtns;
