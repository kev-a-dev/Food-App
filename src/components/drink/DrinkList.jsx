import React, { useContext } from "react";
import Drink from "../drink/Drink";
import '../../App.css';
import { drinks, categoryList } from "../../data";
import AppContext from "../AppContext";

export default function DrinkList() {
  const {searchTerm} = useContext(AppContext);

  return (
    <section id="drink-list">
      

      {categoryList.map((category, index) => (
        <section key={index} id={category.title}>
          <h3 className="title">{category.title}</h3>
          <div className="category">
            {drinks
              .filter((drink) =>
                drink.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .filter((drink) => drink.category === category.category)
              .map((drink, index) => (
                <Drink key={index} drink={drink} />
              ))}
          </div>
        </section>
      ))}
    </section>
  );
}
