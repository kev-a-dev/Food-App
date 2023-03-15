import "./App.css";
import React from "react";

import { AppContextProvider } from "./components/AppContext";

import TitleBar from "./components/TitleBar";
import DrinkList from "./components/drink/DrinkList";
import Cart from "./components/Cart";

function App() {

  return (
    <AppContextProvider>

      <section id="app">

        <TitleBar />  

        <div className="container">
          <DrinkList />
          <Cart />
        </div>

      </section>

    </AppContextProvider>
  );
}

export default App;
