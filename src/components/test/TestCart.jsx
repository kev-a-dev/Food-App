import React, { useState, useEffect, useContext } from "react";
import TestContext from "./TestContext";

export default function TestCart(item) {
  const { cart, setCart } = useContext(TestContext);

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
        <h1>cart</h1>
      </div>

      <div id="cart-list">
      {
        cart.map((i, index) => (
          <div className="cart-box" key={index}>
            <h3>{i.amount}x</h3>
            <h3>{i.name}</h3>
            <h3>{i.sugar}</h3>
            <h3>{i.custom.map((c, index) => (
              <h3 key={index}>{c} </h3>
            ))}</h3>
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
