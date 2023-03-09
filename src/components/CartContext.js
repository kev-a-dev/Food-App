import { createContext } from 'react'

export const CartContext = createContext({
  items: [],
  totalDrinks: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  totalCartCost: () => {},
});

export function CartProvider({children}) {

    const contextValue = {
      items: [],
    }
    return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
    )
}




// Context (cart, addToCart, removeFromCart)
// gives React project access to this file