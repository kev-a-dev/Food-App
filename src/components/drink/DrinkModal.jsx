import React, { useContext } from "react";
import "./DrinkModal.css";
import {toppings} from '../../data';

import AppContext from "../AppContext";

export default function DrinkModal( {drink, closeModal}) {

  const {addToCart} = useContext(AppContext)

  // reset drink
  drink.quantity = 1;
  drink.sugar = '';
  drink.ice = '';
  drink.custom = [];

  // adjust drink
  const handleSugar = (sugar) => {
    drink.sugar = sugar;
  }

  const handleIce = (ice) => {
    drink.ice = ice;
  }

  const handleTopping = (event) => {
    const topping = event.target.value;
    const price = parseFloat(event.target.getAttribute('price'));
    const isChecked = event.target.checked;

    if (isChecked) {
      drink.custom.push({topping, price});
      console.log(drink.custom)
    } else {
      for (let i in drink.custom) {
        if (drink.custom[i] === topping){
          drink.custom.splice(drink.custom[i]);
        }
      }
    }
  }

  // adjust quantity
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

  // required modal open close
  function requiredModal() {
    document.getElementById('required-modal').classList.toggle('active');
    document.getElementById('required-underlay').classList.toggle('active');
    document.getElementById('required-underlay2').classList.toggle('active');
  }

  return (
    <section id="drink-modal">

      <div className="underlay" onClick={closeModal}></div>
      <div id="required-underlay" onClick={requiredModal}></div>
      
      
      <div className="container">

        <div id="required-modal">

          <h3 className="please">Please select: </h3> 
          <div>
            <h3 className="sugar-ice">Sugar Level <span> <h4>and</h4> </span> Ice Level</h3>
          </div>

          <button onClick={requiredModal}>OK</button>
        </div>
        
        <div id="required-underlay2" onClick={requiredModal}></div>

        <button className="close-button" onClick={closeModal}>
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="content-container">

          <div className="content">
            <img src={drink.photo} alt="" />
            <h3 className="name">{drink.name}</h3>
            <h3 className="info">{drink.info}</h3>
            <div id="price">${drink.price.toFixed(2)}</div>
          </div>

          <div className="modal-border"/>

          <div className="customizations-container">
            
            <div className="customizations">
              
              {/* SUGAR LEVEL */}
              <div className="custom-container">
                <h4 className="custom-title">Sugar Level <span> <h4 className="required">(Required)</h4></span> </h4> 
                <div className="options">
                  <label onClick={()=>handleSugar('100% Sugar')}><input type="radio" name='sugar' className="checkbox"></input>100%</label>
                  <label onClick={()=>handleSugar('75% Sugar')}><input type="radio" name='sugar' className="checkbox"></input>75%</label>
                  <label onClick={()=>handleSugar('50% Sugar')}><input type="radio" name='sugar' className="checkbox"></input>50%</label>
                  <label onClick={()=>handleSugar('25% Sugar')}><input type="radio" name='sugar' className="checkbox"></input>25%</label>
                  <label onClick={()=>handleSugar('0% Sugar')}><input type="radio" name='sugar' className="checkbox"></input>0%</label>
                </div>
              </div>

              {/* ICE LEVEL */}
              <div className="custom-container">
                <h4 className="custom-title">Ice Level <span> <h4 className="required">(Required)</h4></span></h4>
                <div className="options">
                  <label onClick={()=>handleIce('Regular Ice')}><input type="radio" name='ice' className="checkbox"></input>Regular Ice</label>
                  <label onClick={()=>handleIce('Less Ice')}><input type="radio" name='ice' className="checkbox"></input>Less Ice</label>
                  <label onClick={()=>handleIce('No Ice')}><input type="radio" name='ice' className="checkbox"></input>No Ice</label>
                </div>
              </div>

              {/* TOPPINGS */}
              <div className="custom-container">
                <h4 className="custom-title">Toppings</h4>
                <div className="options">

                  {toppings.map((topping, index) => (
                    <div className="topping-container" key={index}>
                    <label className="topping-label">
                      <input type="checkbox" className="checkbox" value={topping.name} price={topping.price} onChange={handleTopping}></input>
                        {topping.name}
                      <div className="topping-price">+ ${topping.price.toFixed(2)}</div>
                    </label>
                  </div>
                  ))}

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

              <div className="add-to-cart-wrapper">
                <button className="add-to-cart-button" onClick={()=>addToCart(drink, requiredModal, closeModal)}>Add To Cart</button>
  
              </div>
              
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
