import React, {useState, useEffect} from "react";
import "./Cart.css";

export default function Cart({ size, cart, setCart}) {
  const [totalPrice, setTotalPrice] = useState(0);
  
  let totalAmount = 0

  for (let i in cart){
    totalAmount += cart[i].quantity;
  }

  // total price 
  function handleTotalPrice(){
    let total = 0;
    for (let i in cart){
      total += cart[i].price*cart[i].quantity;
    }
    setTotalPrice(total);
  }
    
  // idk it just works with price.
  useEffect(() => {
    handleTotalPrice();
  })
  
  // delete drink
  function remove(index) {
    const newCart = cart.filter(function(item) {
      return item.id !== index;
    })
    setCart(newCart);
  }

  // toggle cart display
  function toggleCart() {
    document.getElementById("cart").classList.toggle("active");
  }
  
  return (
    <section id="cart">

      <div className="container">
        
        <div className="cart-top">
          <div className="title-wrapper">
           <h3 className="title">Your Cart</h3>
          </div>
          <i className="fa-solid fa-xmark" onClick={toggleCart}></i>
        </div>

        <div className="item-list">
          {cart.map((item, index) => (
            <div className="item" key={index}>
              <div className="item-price-wrapper">
                <div className="quantity-name-wrapper">
                  <h4 className="item-quantity">{item.quantity} x</h4>
                  <h4 className="item-name">{item.name}</h4>
                </div>
                <h4 className="item-price">${(item.quantity * item.price).toFixed(2)}</h4>
              </div>
              <button className="remove-button" onClick={()=>remove(item.id)}>Remove</button>
            </div>
          ))}
        </div>

        <div className="checkout-button-wrapper">
          <button className="checkout-button">
            <h4 className="cart-total">{totalAmount}</h4>
            Checkout
            <h4 className="cart-price">${totalPrice.toFixed(2)}</h4>
          </button>
        </div>

      </div>
        
        <i className="fa-solid fa-cart-shopping" onClick={toggleCart}>
          <div className="cart-icon-number-wrapper">
            <h3 id="cart-icon-number">{totalAmount}</h3>
          </div>
        </i>
        
    </section>
  );
}
