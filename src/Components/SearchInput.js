import React, { useState, useEffect } from "react";

import { useDebounce } from "use-debounce";

import "../css/SearchInput.css";

function SearchInput({ onSearchSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");

  //Getting users searchQuery 1 second after typing.
  const [debouncedValue] = useDebounce(searchQuery, 1000);

  // If the debounceValue has changed, fetch the API by calling onSearchSubmit passing the users new search term.
  useEffect(() => {
    onSearchSubmit(searchQuery);
  }, [debouncedValue]);

  return (
    <>
      <input
        type="search"
        className="search-input"
        placeholder="Howdy, What cha lookin' for?"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        value={searchQuery}
      />
    </>
  );
}

export default SearchInput;
