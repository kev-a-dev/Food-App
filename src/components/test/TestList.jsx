import React from "react";
import "./Test.css";
import items from "./TestData";
import TestItem from "./TestItem";

export default function TestList() {

  return (
  
    <div id="test-list">
      
      {items.map((item, index) => (
        <TestItem
          key={index}
          item={item}
        />
      ))}
    </div>
  );
  
}
