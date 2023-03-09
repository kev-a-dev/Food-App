import React from "react";
import "./DrinkModal.css";

export default function DrinkModal( {drink, addToCart, closeModal}) {
  const { name, price, info, photo } = drink;

  drink.quantity = 1;

  function add(drink) {
    let input = document.getElementById('amount');
    input.value = parseInt(input.value) + 1;
    drink.quantity += 1
  }
  
  function minus(drink) {
    let input = document.getElementById('amount');
    input.value = parseInt(input.value);
    if (input.value > 1){
      input.value -= 1;
    }
    if (drink.quantity > 1){
      drink.quantity -= 1
    }
  }

  return (
    <section id="drink-modal">
      <div className="underlay" onClick={closeModal}></div>

      <div className="container">
        <button className="close-button" onClick={closeModal}>
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="content-container">

          <div className="content">
            <img src={photo} alt="" />
            <h3 className="name">{name}</h3>
            <h3 className="info">{info}</h3>
            <div className="price">${price.toFixed(2)}</div>
          </div>

          <div className="modal-border"/>

          <div className="customizations-container">
            
            <div className="customizations">
              
              {/* SUGAR LEVEL */}
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

              {/* ICE LEVEL */}
              <div className="custom-container">
                <h4 className="custom-title">Ice Level</h4>
                <div className="options">
                  <label><input type="radio" name='ice' className="checkbox"></input>Regular</label>
                  <label><input type="radio" name='ice' className="checkbox"></input>Half</label>
                </div>
              </div>

              {/* TOPPINGS */}
              <div className="custom-container">
                <h4 className="custom-title">Toppings</h4>
                <div className="options">

                  <div className="topping-container">
                    <label className="topping-label">
                      <input type="checkbox" className="checkbox"></input>
                        Boba
                      <div className="topping-price">+$0.50</div>
                    </label>
                  </div>

                  <div className="topping-container">
                    <label className="topping-label">
                      <input type="checkbox" className="checkbox"></input>
                        Mini Boba
                      <div className="topping-price">+$0.50</div>
                    </label>
                  </div>

                  <div className="topping-container">
                    <label className="topping-label">
                      <input type="checkbox" className="checkbox"></input>
                        Creme Brulee
                      <div className="topping-price">+$1.00</div>
                    </label>
                  </div>

                  <div className="topping-container">
                    <label className="topping-label">
                      <input type="checkbox" className="checkbox"></input>
                        Egg Pudding
                      <div className="topping-price">+$0.50</div>
                    </label>
                  </div>

                  <div className="topping-container">
                    <label className="topping-label">
                      <input type="checkbox" className="checkbox"></input>
                        Taro
                      <div className="topping-price">+$0.50</div>
                    </label>
                  </div>

                  <div className="topping-container">
                    <label className="topping-label">
                      <input type="checkbox" className="checkbox"></input>
                        Grass Jelly
                      <div className="topping-price">+$0.50</div>
                    </label>
                  </div>

                  <div className="topping-container">
                    <label className="topping-label">
                      <input type="checkbox" className="checkbox"></input>
                        Mochi
                      <div className="topping-price">+$0.50</div>
                    </label>
                  </div>

                  <div className="topping-container">
                    <label className="topping-label">
                      <input type="checkbox" name=" " className="checkbox"></input>
                        Aloe
                      <div className="topping-price">+$0.50</div>
                    </label>
                  </div>

                </div>
              </div>

              {/* SPECIAL REQUESTS */}
              <div className="custom-container">
                <h4 className="custom-title">Special Requests</h4>
                <textarea type="text" className="request" placeholder="Extra toppings, half toppings, hot drink, etc."/>
              </div>

            </div>

            <div className="add-to-cart-border"/>

            <div className="add-to-cart">

              <div className="amount">
                <button className="minus" onClick={()=>minus(drink)}>-</button>
                  <input id="amount" type="number" defaultValue={1}/>
                <button className="add"onClick={()=>add(drink)}>+</button>
              </div>

              <div className="add-to-cart-wrapper" onClick={closeModal}>
                <button className="add-to-cart-button" onClick={()=>addToCart(drink)}>Add To Cart</button>
  
              </div>
              
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
