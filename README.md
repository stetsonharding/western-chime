# Western Chime
---
# *Overview*
#### This project is a mock-up e-commerce website that fetches the Punk API. My goal of this project was to incorporate a lot of the functionality found on a general e-commerce website using React.js. These functionalities include getting the data, a modal to learn more about the item selected, searching items, favorite items for later use, adding/removing items to and from the users cart, changing and updating the quantity of items selected, pagination for a user friendly experience and to boost performance load times, updating the users price, taxes, and grand total based off items in the users cart, a checkout page with a checkout form and a place to enter promo codes for a discount.
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
I needed to find a way to limit the number of API calls when the user is searching for data. After some research and some reading on the React documentation I discovered the *useDebounce* React hook. This hook allows us to set a time for when a certain function will be called. Before the useDebounce hook was implemented my API was getting called every time the user would enter a number or character in the search input. Now with the useDebounce hook, my API is getting called 1 second after the user is done tying. This increases performance in my application and would save money if this were in a professional setting. Below is the code:

``` JavaScript
function SearchInput({ onSearchSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);

  // update 'searchQuery' value after 1 second from the last update of 'debouncedQuery'
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
```
