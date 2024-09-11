import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [numResults, setNumResults] = useState(10);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query, numResults);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <input
        type="number"
        placeholder="Number of results"
        value={numResults}
        onChange={(e) => setNumResults(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
