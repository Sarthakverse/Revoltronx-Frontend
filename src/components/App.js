import React, { useState } from "react";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";

const App = () => {
  const [results, setResults] = useState([]);

  const handleSearch = async (query, numResults) => {
    try {
      const response = await axios.get(`http://localhost:8080/search`, {
        params: { query, numResults },
      });
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching search results", error);
    }
  };

  return (
    <div>
      <h1>Search App</h1>
      <SearchForm onSearch={handleSearch} />
      <SearchResults results={results} />
    </div>
  );
};

export default App;
