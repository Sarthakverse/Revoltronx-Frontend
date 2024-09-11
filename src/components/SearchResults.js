import React from "react";

const SearchResults = ({ results }) => {
  return (
    <div>
      {results.length > 0 ? (
        results.map((result, index) => (
          <div key={index}>
            <h3>{result.title}</h3>
            <p>{result.snippet}</p>
            <a href={result.url} target="_blank" rel="noopener noreferrer">
              Visit
            </a>
            <img src={result.thumbnailUrl} alt={result.title} width="100" />
            {result.likes && <p>Likes: {result.likes}</p>}
            {result.views && <p>Views: {result.views}</p>}
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
