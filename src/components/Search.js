// src/components/Search.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const fishList = [
    "Cá mập",
    "Cá ngừ",
    "Cá hải tượng",
    "Cá vây dài",
    "Cá ngọc trai",
  ];

  const navigate = useNavigate();

  const handleSearch = () => {
    const filteredFish = fishList.filter((fish) =>
      fish.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredFish);

    if (filteredFish.length === 1) {
      navigate(`/fish-info/${filteredFish[0].toLowerCase()}`);
    }
  };

  return (
    <div className="search-container">
      <h1>Tìm Kiếm Loài Cá</h1>
      <input
        type="text"
        placeholder="Tìm kiếm..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Tìm</button>

      <ul>
        {results.map((fish, index) => (
          <li
            key={index}
            onClick={() => navigate(`/fish-info/${fish.toLowerCase()}`)}
          >
            {fish}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
