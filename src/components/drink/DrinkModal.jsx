import React from "react";
import "./DrinkModal.css";

export default function DrinkModal(props) {
  const { name, price, info, photo, closeModal } = props;

  function add() {
    let input = document.getElementById('amount');
    input.value = parseInt(input.value) + 1;
  }
  
  function minus() {
    let input = document.getElementById('amount');
    input.value = parseInt(input.value);
    if (input.value > 1){
      input.value -= 1;
    }
  }

  return (
    <section id="drink-modal">
      <div className="underlay" onClick={closeModal}></div>

      <div className="container">
        <button className="close-button" onClick={closeModal}>
          <i class="fa-solid fa-xmark"></i>
        </button>

        <div className="content-container">

          <div className="content">
            <img src={photo} alt="" />
            <h3 className="name">{name}</h3>
            <h3 className="info">{info}</h3>
            <div className="price">{price}</div>
          </div>

          <div className="modal-border"/>

          <div className="customizations-container">
            
            <div className="customizations">
              
              <div className="custom-container">
                <h4 className="custom-title">Sugar Level</h4>
                <div className="options">
                  <label><input type="radio" name='sugar' className="checkbox"></input>100%</label>
                  <label><input type="radio" name='sugar' className="checkbox"></input>75%</label>
                  <label><input type="radio" name='sugar' className="checkbox"></input>50%</label>
                  <label><input type="radio" name='sugar' className="checkbox"></input>25%</label>
                  <label><input type="radio" name='sugar' className="checkbox"></input>0%</label>
                </div>
              </div>
              
              <div className="custom-container">
                <h4 className="custom-title">Ice Level</h4>
                <div className="options">
                  <label><input type="radio" name='ice' className="checkbox"></input>Regular</label>
                  <label><input type="radio" name='ice' className="checkbox"></input>Half</label>
                </div>
              </div>
              
              <div className="custom-container">
                <h4 className="custom-title">Toppings</h4>
                <div className="options">

                  <div className="topping-container">
                    <label className="topping-label">
                      <input type="radio" name='topping' className="checkbox"></input>
                        Boba
                      <div className="topping-price">+$0.50</div>
                    </label>
                  </div>

                  <div className="topping-container">
                    <label className="topping-label">
                      <input type="radio" name='topping' className="checkbox"></input>
                        Mini Boba
                      <div className="topping-price">+$0.50</div>
                    </label>
                  </div>

                  <div className="topping-container">
                    <label className="topping-label">
                      <input type="radio" name='topping' className="checkbox"></input>
                        Mochi
                      <div className="topping-price">+$0.50</div>
                    </label>
                  </div>

                  <div className="topping-container">
                    <label className="topping-label">
                      <input type="radio" name='topping' className="checkbox"></input>
                        Egg Pudding
                      <div className="topping-price">+$0.50</div>
                    </label>
                  </div>

                  <div className="topping-container">
                    <label className="topping-label">
                      <input type="radio" name='topping' className="checkbox"></input>
                        Cheese Mousse
                      <div className="topping-price">+$1.00</div>
                    </label>
                  </div>

                  <div className="topping-container">
                    <label className="topping-label">
                      <input type="radio" name='topping' className="checkbox"></input>
                      None
                    </label>
                  </div>
                </div>
              </div>

              <div className="custom-container">
                <h4 className="custom-title">Special Requests</h4>
                <textarea type="text" className="request" placeholder="Drink adjustments, half toppings, hot drink, etc."/>
              </div>

            </div>

            <div className="add-to-cart">

              <div className="add-to-cart-border"/>

              <div className="amount">
                <button className="minus" onClick={minus}>-</button>
                  <input type="number" value={1} id="amount"/>
                <button className="add"onClick={add}>+</button>
              </div>

              <div className="add-to-cart-wrapper">
                <button className="add-to-cart-button">Add To Cart</button>
              </div>
              
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
