import React from "react";
import "./Nav.css";
import boba from '../assets/boba.png';
import tea from '../assets/tea.png';
import fruit from '../assets/fruit.png';
import smoothie from '../assets/smoothie.png';
// import newTea from '../assets/newTea.png';

export default function Nav() {

  return (
    <section id="nav">
      <div className="container">
        <div className="navbar">
          <div className="drink-links">
            <a href="#popular" className="drink-link">
              <img src={boba} alt="" />
              Popular
            </a>
            <a href="#fresh" className="drink-link">
              <img src={tea} alt="" />
              Fresh Teas
            </a>
            <a href="#fruit" className="drink-link">
              <img src={fruit} alt="" />
              Fruit Teas
            </a>
            <a href="#smoothies" className="drink-link">
              <img src={smoothie} alt="" />
              Smoothies
            </a>
            {/* <a href="#comingSoon" className="drink-link">
              <img src={newTea} alt="" />
              Coming soon...
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
