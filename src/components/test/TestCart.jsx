import React, { useState } from "react";
import { useEffect } from "react";

export default function TestCart({size, cart, setCart, amount}) {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let total = 0;
    for (let i in cart){
      total += ((cart[i].price) * (cart[i].amount));
    }
    setPrice(total);
  }

  const handleRemove = (index) => {
    const newCart = cart.filter((item) => item.id !== index);
    setCart(newCart);
    console.log(newCart);

  };

  useEffect(() => {
    handlePrice();
    
  })

  return (
    <div id="test-cart">
      <div className="top-wrapper">
        <h3 className="cart-amount">Items: {size}</h3>
        <h1>cart</h1>
      </div>
      <div id="cart-list">
      {
        cart.map((i, index) => (
          <div className="cart-box" key={index}>
            <h3>{i.amount}x</h3>
            <h3>{i.name}</h3>
            <h3>${i.price}</h3>
            <button onClick={()=>handleRemove(i.id)}>remove</button>
          </div>
        ))
      } 
      </div>
      <div>Total ${price}</div>
    </div>
  );
}
