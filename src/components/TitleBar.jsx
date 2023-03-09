import React from "react";
import "./TitleBar.css";
import Nav from "./Nav";

export default function TitleBar() {

  return (
    <section id="title-bar">

      <div className="store-name-wrapper">
        <h1 className="store-name">Some Tea Place</h1>
      </div>

      <div className="nav-wrapper">
        <Nav/>
      </div>

      <div className="search-bar-wrapper">
        <div className="search-bar-container">
          <input type="text" className="search-bar" placeholder="Search" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      
    </section>
  );
}
