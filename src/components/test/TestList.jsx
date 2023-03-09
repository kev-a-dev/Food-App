import React from "react";
import "./Test.css";
import items from "./TestData";
import TestItem from "./TestItem";

export default function TestList({addToCart, add, minus, amount}) {

  return (
    <div id="test-list">
      {
        items.map((item, index) => (
          <TestItem key={index} item={item} addToCart={addToCart} add={add} minus={minus} amount={amount}/>
        ))
      }
    </div>
  );
}
