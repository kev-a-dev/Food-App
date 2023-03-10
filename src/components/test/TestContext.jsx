import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TestContext = createContext();

export function TestContextProvider({ children }) {
  // ---------- cart
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    const newItem = { ...item, id: uuidv4() };
    setCart([...cart, newItem]);
  }

  return (
    <>
      <TestContext.Provider
        value={{
          cart,
          setCart,
          addToCart,
        }}
      >
        {children}
      </TestContext.Provider>
    </>
  );
}

export default TestContext;

// TestApp

//     TestList
//         TestItem = {openModal}
//             TestModal = {closeModal, addToCart, handleAdd, handleMinus}

//     TestCart = {cart}
