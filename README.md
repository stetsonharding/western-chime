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
I had to figure out how to restrict how many API requests are made when a user is looking for products. I learned about the *useDebounce* React hook after doing some investigation and going through the React documentation. We can specify a time when a specific function will be called using this hook. Previously, My API was being called every time a user entered a number or character in the search input before the useDebounce hook was enabled. The useDebounce hook has made it so that my API is now called 1 second after the user has finished tying. If this were done in a business setting, it would improve performance in my application and save money. The code is given below:

``` JavaScript
import React, { useState, useEffect } from "react";

import  {useDebounce}  from 'use-debounce';

import "../css/SearchInput.css";

function SearchInput({ onSearchSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");
  
  //Getting users searchQuery 1 second after typing
  const [debouncedValue] = useDebounce(searchQuery, 1000)

  // If the debounceValue has changed, call the API again
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
