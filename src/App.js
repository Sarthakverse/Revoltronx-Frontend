import React, { useState } from "react";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/search`, {
        params: { query, numResults: 10 },
      });
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching search results", error);
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const isVideo = (result) => {
    return result.source && result.source.toLowerCase() === "youtube";
  };

  const filteredResults = results.filter((result) => {
    if (filter === "all") return true;
    if (filter === "youtube") return isVideo(result);
    if (filter === "article") return !isVideo(result);
  });

  return (
    <div className="min-h-screen bg-gray-900 p-8 text-white">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Unified Search
        </h1>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="mb-4">
          <div className="flex items-center">
            <input
              type="text"
              className="w-full border border-gray-600 bg-gray-700 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter search query"
            />
            <button
              type="submit"
              className="ml-4 bg-purple-600 text-white rounded-lg px-6 py-2 hover:bg-purple-700 transition duration-300"
            >
              Search
            </button>
          </div>
        </form>

        {/* Filter Dropdown */}
        <div className="mb-8">
          <label className="mr-4 text-gray-300">Filter by:</label>
          <select
            value={filter}
            onChange={handleFilterChange}
            className="bg-gray-700 text-white py-2 px-4 rounded-lg"
          >
            <option value="all">All</option>
            <option value="youtube">Videos</option>
            <option value="article">Articles</option>
          </select>
        </div>

        {/* Filtered Search Results */}
        <div className="space-y-6">
          {filteredResults.map((result, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg p-4 bg-gray-700 shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">
                {result.title}
              </h3>
              <a
                href={result.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline"
              >
                {result.url}
              </a>
              <p className="text-gray-300 mt-2">{result.snippet}</p>
              {result.thumbnailUrl && (
                <img
                  src={result.thumbnailUrl}
                  alt={result.title}
                  className="mt-4 w-48 rounded-lg shadow-lg"
                />
              )}
              <div className="text-sm text-gray-400 mt-2">
                <p>Views: {result.views || "N/A"}</p>
                <p>Likes: {result.likes || "N/A"}</p>
                <p>Source: {result.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
