import React, { useState } from "react";
import "./Drink.css";
import DrinkModal from "./DrinkModal";

export default function Drink(props) {
  const { name, price, info, photo } = props;
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
          <h3 className="name">{name}</h3>
          <h3 className="info">{info}</h3>
          <h3 className="price">{price}</h3>
        </div>
        <div className="photo-container">
          <img src={photo} className="photo" alt="" />
        </div>
      </div>
      {modalOpen && (
        <DrinkModal
          name={name}
          info={info}
          price={price}
          photo={photo}
          closeModal={closeModal}
        />
      )}
    </section>
  );
}
