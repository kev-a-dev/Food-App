import React from "react";
import "./Nav.css";

// images
import boba from "../assets/boba.png";
import tea from "../assets/tea.png";
import fruit from "../assets/fruit.png";
import smoothie from "../assets/smoothie.png";

export default function Nav() {
  const items = [
    { id: "#Popular", img: boba, text: "Popular" },
    { id: "#Fresh Teas", img: tea, text: "Fresh Teas" },
    { id: "#Fruit Teas", img: fruit, text: "Fruit Teas" },
    { id: "#Smoothies", img: smoothie, text: "Smoothies" },
  ];

  return (
    <section id="nav">
      <div className="container">
        <div className="navbar">
          <div className="drink-links">
      
            {
            items.map((category, index) => (
              <a href={category.id} className="drink-link" key={index}>
                <img src={category.img} alt="" />
                {category.text}
              </a>
            ))
            }

          </div>
        </div>
      </div>
    </section>
  );
}
