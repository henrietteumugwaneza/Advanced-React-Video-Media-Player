import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) navigate(`/search/${search.trim()}`);
  };

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="search-btn" type="submit" aria-label="Search">
        🔍
      </button>
    </form>
  );
}

export default SearchBar;
