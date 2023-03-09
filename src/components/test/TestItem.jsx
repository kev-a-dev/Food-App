import React, {useState} from 'react'
import './Test.css';
import TestModal from './TestModal';


export default function TestItem({item, addToCart, add, minus, amount}) {
    const [modalOpen, setModalOpen] = useState(false);
    const { name, price } = item;

    function openModal() {
      setModalOpen(true);
    }
  
    function closeModal() {
      setModalOpen(false);
    }

  return (
    <div>
    <div id="test-item" onClick={openModal}>
        <h3>{name}</h3>
        <h3>${price}</h3>
        {/* <button onClick={()=>addToCart(item)}>add to cart</button> */}
    </div>

    {modalOpen && (
      <TestModal
        item={item}
        closeModal={closeModal}
        addToCart={addToCart}
        add={add} 
        minus={minus}
        amount={amount}
      />
    )}
    </div>
  )
}
