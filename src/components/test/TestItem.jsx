import React, { useState } from "react";
import "./Test.css";
import TestModal from "./TestModal";


export default function TestItem({ item  }) {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div>
      <div id="test-item" onClick={openModal}>
        <h3>{item.name}</h3>
        <h3>${item.price}</h3>
      </div>

       {modalOpen && (
        <TestModal
          item={item}
          closeModal={closeModal}
        />
      )} 
    </div>
  );
}
