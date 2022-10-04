import React, { useState, useEffect } from "react";

import "../css/SearchInput.css";

function SearchInput({ onSearchSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    onSearchSubmit(searchQuery);
  }, [searchQuery, onSearchSubmit]);

  return (
    <>
      <input
        type="text"
        className="search-input"
        placeholder="Howdy, What cha lookin' for?"
        onChange={(e) => {
          setSearchQuery(e.target.value);
          // onSearchSubmit(searchQuery);
        }}
        value={searchQuery}
      />
    </>
  );
}

export default SearchInput;
