import React, { useContext } from "react";
import "./TitleBar.css";
import Nav from "./Nav";
import AppContext from "./AppContext";

export default function TitleBar() {
  const {searchTerm, setSearchTerm} = useContext(AppContext);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <section id="title-bar">

      <div className="store-name-wrapper">
        <h1 className="store-name">Some Tea Place</h1>
      </div>
      
        <Nav/>
    
      <div className="search-bar-wrapper">
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
      </div>
      
    </section>
  );
}
