import React, {useState, useEffect, useContext} from "react";
import "./Cart.css";
import wink from '../assets/wink.png';
import AppContext from "./AppContext";

export default function Cart() {

  const {cart, setCart} = useContext(AppContext);

  const [totalPrice, setTotalPrice] = useState(0);
  
  // sets total cart amount
  let totalAmount = 0;

  if (cart.length > 0){
    document.getElementById('no-items-wrapper').classList.add('active');
  }

  for (let i in cart){
    totalAmount += cart[i].quantity;
  }

  // total item price
  function getItemPrice(item){
    let price = item.quantity * item.price;
    item.custom.forEach(c => {
      price += (c.price * item.quantity);
    })
    return price;
  }

  // total cart price 
  function handleTotalPrice(){
    let total = 0;
    for (let i in cart){
      total += getItemPrice(cart[i]); 
    }
    setTotalPrice(total);
  }
    
  // idk it just works 
  useEffect(() => {
    handleTotalPrice();
  })
  
  // delete drink
  function remove(index) {
    document.getElementById('no-items-wrapper').classList.remove('active');
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

          {
          cart.map((item, index) => (
            <div className="item" key={index}>
              <div className="item-price-wrapper">

                <div className="quantity-name-wrapper">
                  <div>
                    <h4 className="item-quantity">{item.quantity} x</h4>
                    <h4 className="item-name">{item.name}</h4>
                  </div>
                  <h4 className="item-price">${(getItemPrice(item)).toFixed(2)}</h4>
                </div>

                <div className="drink-custom">
                  <h4 className="item-sugar">{item.sugar}</h4>
                  <h4 className="item-ice">{item.ice}</h4>
                  {item.custom.map((c, index) => (
                    <div className="topping-price-wrapper" key={index}>
                      <h4>{c.topping}</h4>
                      <h4>+{c.price.toFixed(2)}</h4>
                    </div>
                  ))}
                </div>

              </div>
              <button className="remove-button" onClick={()=>remove(item.id)}>Remove</button>
            </div>
          ))
          }

          <div id="no-items-wrapper">
            <div>There are zero items in cart</div>
            <img src={wink} alt="" />
          </div>

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
