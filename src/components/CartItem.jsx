import React from 'react'
import './CartItem.css';

export default function CartItem(props) {
  const { cartItems } = props;

  return (
    <section id="cart-item">
      <aside className="container"> 
        {cartItems.lengh === 0 && <div>Cart Is Empty</div>}
      </aside>
    </section>

  )
}

