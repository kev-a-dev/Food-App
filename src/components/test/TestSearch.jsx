import React from "react";

export default function TestSearch({ searchTerm, setSearchTerm }) {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        id="search-bar"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
      />
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  );
}