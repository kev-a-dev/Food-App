import React from 'react'
import './Test.css'

export default function TestModal({item, closeModal, addToCart, add, minus}) {
    const { name, price } = item;
    
  return (
      <div id="test-modal">
        <button onClick={closeModal}>close</button>
        <h3>{name}</h3>
        <h3>${price}</h3>
        <button onClick={()=>add(item)}>+</button>
        <button onClick={()=>minus(item)}>-</button>
        <button onClick={()=>addToCart(item)}>add to cart</button>
        <div>{item.amount}</div>

    </div>
  )
}
