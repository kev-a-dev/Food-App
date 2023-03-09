import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import TestList from "./TestList";
import TestCart from "./TestCart";

export default function TestApp() {
    
    const [cart, setCart] = useState([]);
    
    
    function addToCart(item) {
      const newItem = {...item, id:uuidv4()}
      setCart([...cart, newItem]);
      return newItem;
    }

    function add(item) {
      item.amount += 1;
    }
    
    function minus(item) {
      if (item.amount > 1){
        item.amount -= 1;
      }
    }



  return (
    <div id="test-app">
      <TestList addToCart={addToCart} add={add} minus={minus}/>
      <TestCart size={cart.length} cart={cart} setCart={setCart}/>
    </div>
  );
}
