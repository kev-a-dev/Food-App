import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  
  // ---------- search filter
  const [searchTerm, setSearchTerm] = useState("");

  // ---------- cart
  const [cart, setCart] = useState([]);

  function addToCart(item, requiredModal, closeModal) {
    if (!item.sugar || !item.ice){
      requiredModal();
      return;
    }
    const newItem = { ...item, id: uuidv4() };
    setCart([...cart, newItem]);
    closeModal();
  }

  return (
    <>
      <AppContext.Provider
        value={{
          cart,
          setCart,
          addToCart,
          searchTerm,
          setSearchTerm
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
}

export default AppContext;

// App
//    TitleBar
//      NavBar

//    DrinkList
//      Drink
//        DrinkModal = {addToCart}

//    Cart


