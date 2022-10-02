import { useState, useEffect } from "react";
import "./App.css";

//Components
import Header from "./Components/Header";
import CardContainer from "./Components/CardContainer";

function App() {
  const [beverages, setBeverages] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const GetApiBeverages = async () => {
    const URL = "https://api.punkapi.com/v2/beers?page=1&per_page=10";

    try {
      const response = await fetch(URL);
      const data = await response.json();
      setBeverages(data);
    } catch (err) {
      setErrorMessage("Oh no! Someones fussin' with our invitory! Try Again!");
    }
  };

  useEffect(() => {
    GetApiBeverages();
  }, []);

  return (
    <div className="App">
      <Header />
      <CardContainer beverages={beverages} errorMessage={errorMessage} />
    </div>
  );
}

export default App;
