import "./App.css";
import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import TitleBar from "./components/TitleBar";
import DrinkList from "./components/drink/DrinkList";
import Cart from "./components/Cart";

// import TestApp from "./components/test/TestApp";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(items){
    const newItem = {...items, id:uuidv4()};
    setCart([...cart, newItem]);
  }

  return (
    <section id="app">
       <TitleBar />
       <div className="container">
         <DrinkList addToCart={addToCart}/>
         <Cart size={cart.length} cart={cart} setCart={setCart}/>
       </div>
      {/* <TestApp/> */}
    </section>
  );
}

export default App;
