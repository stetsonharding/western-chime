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
