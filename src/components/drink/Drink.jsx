import React, { useState } from "react";
import "./Drink.css";
import DrinkModal from "./DrinkModal";

export default function Drink({drink}) {

  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
    document.body.classList.add("scroll-stop");
  }

  function closeModal() {
    setModalOpen(false);
    document.body.classList.remove("scroll-stop");
  }

  return (
    <section id="drink">
      <div className="container" onClick={openModal}>

        <div className="info-container">
          <h3 className="name">{drink.name}</h3>
          <h3 className="info">{drink.info}</h3>
          <h3 className="price">${drink.price.toFixed(2)}</h3>
        </div>
        
        <div className="photo-container">
          <img src={drink.photo} className="photo" alt="" />
        </div>
      </div>

      {modalOpen && (
        <DrinkModal
          drink={drink}
          closeModal={closeModal}
        />
      )}
      
    </section>
  );
}