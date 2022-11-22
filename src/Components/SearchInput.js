import React, { useState, useEffect } from "react";

import "../css/SearchInput.css";

function SearchInput({ onSearchSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);

  // update 'searchQuery' value after 1 second from the last update of 'debouncedTerm'
  useEffect(() => {
    const timer = setTimeout(() => setSearchQuery(debouncedQuery), 1000);
    return () => clearTimeout(timer);
  }, [debouncedQuery]);

  //Submit a new search
  useEffect(() => {
    onSearchSubmit(searchQuery);
  }, [searchQuery]);

  return (
    <>
      <input
        type="search"
        className="search-input"
        placeholder="Howdy, What cha lookin' for?"
        onChange={(e) => {
          setDebouncedQuery(e.target.value);
        }}
        value={debouncedQuery}
      />
    </>
  );
}

export default SearchInput;
