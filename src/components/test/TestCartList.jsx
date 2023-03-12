import React, { useState } from "react";
import Drink from "../drink/Drink";
import { drinks, categoryList } from "../../data";
import TestSearch from "./TestSearch";

export default function TestCartList() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section id="drink-list">
      <TestSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

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

