import React, { useState, useEffect, useContext } from "react";

import { useDebounce } from "use-debounce";

import _ from "lodash";

import { GetBeveragesContext } from "../Contexts/GetBeveragesContext";

import "../css/SearchInput.css";

function SearchInput() {
  const [searchQuery, setSearchQuery] = useState("");

  const {
    setBeverages,
    setErrorMessage,
    AddImage,
    GetApiBeverages,
    AllDataProperties,
  } = useContext(GetBeveragesContext);

  //Getting users searchQuery 1 second after typing.
  const [debouncedValue] = useDebounce(searchQuery, 1000);

  // If the debounceValue has changed, fetch the API by calling onSearchSubmit passing the users new search term.
  useEffect(() => {
    onSearchSubmit(searchQuery);
  }, [debouncedValue]);

  //Function to find users product thats searched for
  const onSearchSubmit = _.memoize(async (query) => {
    if (query !== "") {
      try {
        const response = await fetch(
          `https://api.punkapi.com/v2/beers?beer_name=${query}`
        );
        const data = await response.json();

        //No results found for specified search query. Display error message.
        if (data.length === 0) {
          setErrorMessage(
            `Shucks! We can't seem to find ${query}. Try Lookin' for another?`
          );
          setBeverages([]);

          //API retrieval was successful.
        } else {
          //adding attributes needed attributes to data by calling AllDataProperties function.
          const finalData = AllDataProperties(data);
          //In case the product doesn't have a image in the results, add an image to product by calling AddImage.
          AddImage(finalData);
          //storing API results into state
          setBeverages(finalData);
          //setting an empty string as the error message
          setErrorMessage("");
        }
        //Error fetching API
      } catch (err) {
        setErrorMessage(`There seems to be an error!`);
        setBeverages([]);
      }
    } else {
      //Retrieves beverage API to display beverages once more if the user removes the search query from the input.
      GetApiBeverages();
      setErrorMessage("");
    }
  });

  return (
    <div className="search-input-container">
      <input
        type="search"
        className="search-input"
        placeholder="Howdy, What cha lookin' for?"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        value={searchQuery}
      />
    </div>
  );
}

export default SearchInput;
