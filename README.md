# Western Chime
---
# *Overview*
#### Western Chime - The mock-up e-commerce website in this project retrieves the Punk API. With this project, I wanted to use React.js to add a lot of the features present on a typical e-commerce website. These features include retrieving the data, displaying a modal with additional information about the item selected, searching for items, saving favorites for later use, adding/removing items from the user's cart, changing and updating the quantity of items selected, using pagination to improve user friendliness and performance load times, updating the user's price, taxes, and grand total based on items in the user's cart, and a checkout page with a form to enter promotional codes.
---
# *Technologies*
- ## React.js
 1. Functional Components using Hooks (useState, useEffect, useDebounce).
 2. React Router for site navigation.
 3. Conditional Rendering.
 4. Component reuse and modifications using props.childen.
 5. Demonstration of passing props from parent to child components.
 - ## lodash/Memoization
 1. Help limit the number of API calls by saving already searched query results in storage.
  - ## CSS/Flexbox/Grid
 1. Clean reusable styling.
 2. Fully responsive to all screen sizes.
 - ## Punk API
 1. Fetch data as well as handle all edge cases and errors.
 ---
 # *New Discoveries*
 - ### limiting the number of API calls
 #### useDebounce
I wanted to figure out how to restrict how many API requests are made when a user is looking for products. I learned about the *useDebounce* React hook after doing some research on how to limit the number of API calls (https://usehooks-ts.com/react-hook/use-debounce). We can specify a time when a specific function will be called using this hook. Previously, My API was being called every time a user entered a number or character in the search input. The useDebounce hook has made it so that my API is now called 1 second after the user has finished tying. This improves performance, and would save a company money making less API calls. The code is given below:

``` JavaScript
import React, { useState, useEffect } from "react";

import  {useDebounce}  from 'use-debounce';

import "../css/SearchInput.css";

function SearchInput({ onSearchSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");
  
  //Getting users searchQuery 1 second after typing.
  const [debouncedValue] = useDebounce(searchQuery, 1000)

  // If the debounceValue has changed, fetch the API by calling onSearchSubmit passing the users new search term.
  useEffect(() => {
   onSearchSubmit(searchQuery)
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
```
#### Lodash_Memoize
I implemented *lodash's _Memoize* method to better restrict the API requests. With Memoize, you may effectively cache a function's output for the same parameters. Let's imagine someone searched for the product "Buzz," and the results were cached. Now, if a user searches for Buzz once again, the cache will be used rather than the API to get the result. Below is my function to search for a users product that uses Memoize.

```JavaScript
 //use the user's search term to find beverages.
  const onSearchSubmit = _.memoize(async (query) => {
    if (query !== "") {
      //handling edge cases and problems while fetching API
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
          //adding attributes (quantity, addedToCart) to data by calling AllDataProperties function.
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
  ```


