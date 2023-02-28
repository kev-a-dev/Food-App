import React from "react";
import "./Cart.css";

export default function Cart() {
  function toggleCart() {
    document.getElementById("cart").classList.toggle("active");
  }

  return (
    <section id="cart">
      <div className="underlay">
        <div className="container">
          <div className="cart-container">
            <i class="fa-solid fa-xmark" onClick={toggleCart}></i>

            <div className="title-x-wrapper">
              <h3 className="title">Your Cart</h3>
              <button className="checkout-button">Checkout</button>
            </div>

          </div>
        </div>
      </div>
      <i class="fa-solid fa-cart-shopping" onClick={toggleCart}></i>
    </section>
  );
}
