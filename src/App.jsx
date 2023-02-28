import "./App.css";
import Nav from "./components/Nav";
import DrinkList from "./components/drink/DrinkList";
import Cart from "./components/Cart";
import TitleBar from "./components/TitleBar";
// import Test from "../src/components/test/Test.jsx";

function App() {
  return (
    <section id="app">
      <TitleBar />
      <Nav />
      <div className="container">
        <DrinkList />
        <Cart />
      </div>
    </section>
  );
}

export default App;
