import React from "react";
import "./TitleBar.css";

export default function TitleBar() {
  return (
    <section id="title-bar">

      <h1 className="store-name">Some Tea Place</h1>

      <div className="search-bar-container">
        <input type="text" className="search-bar" placeholder="Search" />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>

      <div className="link-list">
        <h4 className="link">About Us</h4>
        <h4 className="link">Locations</h4>
        <h4 className="link">Contact</h4>
        <h4 className="link">Rewards</h4>
      </div>
      
    </section>
  );
}
