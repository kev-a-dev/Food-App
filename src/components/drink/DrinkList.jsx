import React from "react";
import Drink from "./Drink";
import drinks from "../../data";

export default function DrinkList({addToCart}) {

  return (
    <section id="drink-list">
      <section id="popular">
        <h3 className="title">Popular</h3>
        <div className="category">
          {drinks.map((drink, index) => (
            drink.category === 'popular' ? (
              <Drink key={index} drink={drink} addToCart={addToCart}/>
            ) : null
          ))}
        </div>
      </section>
      <section id="fresh">
        <h3 className="title">Fresh Teas</h3>
        <div className="category">
          {drinks.map((drink, index) => (
              drink.category === 'fresh' ? (
                <Drink key={index} drink={drink} addToCart={addToCart}/>
              ) : null
          ))}
        </div>
      </section>
      <section id="fruit">
        <h3 className="title">Fruit Teas</h3>
        <div className="category">
          {drinks.map((drink, index) => (
              drink.category === 'fruit' ? (
                <Drink key={index} drink={drink} addToCart={addToCart}/>
              ) : null
          ))}
        </div>
      </section>
      <section id="smoothies">
        <h3 className="title">Smoothies</h3>
        <div className="category">
          {drinks.map((drink, index) => (
              drink.category === 'smoothie' ? (
                <Drink key={index} drink={drink} addToCart={addToCart}/>
              ) : null
          ))}
        </div>
      </section>
    </section>
  );
}
