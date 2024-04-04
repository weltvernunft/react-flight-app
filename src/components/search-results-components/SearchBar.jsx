import React, { useState } from "react";
import "./SearchBar.scss";
import Button from "../Button.jsx";

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by airline"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
}

export default SearchBar;
