import React from "react";

import "../css/SearchInput.css";

function SearchInput() {
  return (
    <>
      <input
        type="text"
        className="search-input"
        placeholder="Howdy, What cha lookin' for?"
      />
    </>
  );
}

export default SearchInput;
